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
    <main>
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
      {blogPosts.map((post) => (
        <div key={post.title} className="border-grid border-b">
          <div className="container-wrapper">
            <section className="py-24">
              <div className="container">
                <Link href={post.link} className="group">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-grow">
                      <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <div className="flex items-center gap-2 text-sm mb-4">
                        <span className="text-muted-foreground">
                          {post.author}
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">
                          {post.formattedDate}
                        </span>
                      </div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </div>
      ))}
    </main>
  );
}
