import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import fs from "fs";
import { Metadata } from "next";
import Link from "next/link";
import path from "path";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read about the latest news and updates from Gateway Home Attica.",
};

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function formatDate(dateString: string): string {
  return format(new Date(dateString), "MMMM d, yyyy");
}

function getBlogPosts() {
  const blogDir = path.join(process.cwd(), "app/blog");
  const directories = fs
    .readdirSync(blogDir)
    .filter((dir) => fs.statSync(path.join(blogDir, dir)).isDirectory());

  const posts = directories.map((dir) => {
    const filePath = path.join(blogDir, dir, "page.mdx");
    const content = fs.readFileSync(filePath, "utf8");
    const metadataMatch = content.match(
      /export const metadata = ({[\s\S]*?});/,
    );
    const metadata = metadataMatch ? eval(`(${metadataMatch[1]})`) : {};
    const contentAfterHeader = content.split("<BlogHeader")[1];
    const mainContent = contentAfterHeader.split("/>")[1];
    const paragraphs = mainContent.split("\n\n");
    const firstParagraph = paragraphs.find(
      (p) =>
        p.trim() &&
        !p.trim().startsWith("<") &&
        !p.trim().startsWith("import") &&
        !p.trim().startsWith("export"),
    );
    const excerpt = firstParagraph ? firstParagraph.trim() : "";
    const authorMatch = content.match(/author="([^"]+)"/);
    const author = authorMatch ? authorMatch[1] : "";

    return {
      title: metadata.title || "",
      excerpt: excerpt,
      author: author,
      date: metadata.date,
      formattedDate: formatDate(metadata.date),
      readTime: calculateReadTime(mainContent),
      link: `/blog/${dir}`,
    };
  });

  // Sort posts by date (newest first)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export default function BlogPage() {
  const blogPosts = getBlogPosts();

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Gateway Home Blog</h1>
                <p className="text-lg text-muted-foreground">
                  Stay updated with the latest news, stories, and updates from
                  our community
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="grid grid-cols-1 gap-8">
                {blogPosts.map((post) => (
                  <Link href={post.link} key={post.title} className="group">
                    <Card className="h-full transition-shadow hover:shadow-lg flex flex-col">
                      <CardHeader className="flex-none pb-4">
                        <CardTitle className="group-hover:text-primary transition-colors text-2xl">
                          {post.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm mt-2">
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {post.author}
                          </span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {post.formattedDate}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col justify-between">
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-sm mt-auto pt-4 border-t">
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {post.readTime}
                          </span>
                          <span className="text-muted-foreground group-hover:text-primary transition-colors">
                            →
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
