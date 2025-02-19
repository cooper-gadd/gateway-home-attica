import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read about the latest news and updates from Gateway Home Attica.",
};

const blogPosts = [
  {
    title: "Big Families",
    excerpt:
      "Discover the joys and challenges of raising a big family. This article explores the unique dynamics of large families, including communication, discipline, and financial planning. Learn how Gateway Home supports families through resources and programs tailored to their needs.A heartfelt piece about the sense of family and support at Gateway Home, where no one faces end-of-life transitions alone. Through love, care, and small comforts, staff and volunteers ensure that every individual, regardless of their circumstances, becomes part of a larger family.",
    date: "February 3, 2025",
    author: "Sara Brunner",
    readTime: "2 min read",
    link: "/blog/big-families",
  },
  {
    title: "First Annual Gateway Home Memorial Service",
    excerpt:
      "Gateway Home hosted its first annual Memorial Service at the 1st Baptist Church in Attica, honoring 77 residents who passed away in our care. The evening featured songs, remembrance, and fellowship, establishing a new yearly tradition each November.",
    date: "November 13, 2024",
    author: "Sara Brunner",
    readTime: "3 min read",
    link: "/blog/first-annual-gateway-home-memorial-service",
  },
  {
    title: "Gateway Home Dedicates Brick Walkways",
    excerpt:
      "Join Gateway Home as they unveil their touching new memorial brick walkways. This article captures the emotional dedication ceremony, where each brick represents a cherished memory of a former resident. Discover how this project, supported by the East Hill Foundation, has transformed the home's exterior while creating a lasting tribute to those who have passed. Director Sara Brunner and President Doug Domes share insights on the project's significance and the continued community support that makes Gateway Home's mission possible.",
    date: "July 13, 2024",
    author: "Brain Quinn",
    readTime: "4 min read",
    link: "/blog/gateway-home-dedicates-brick-walkways",
  },
  {
    title: "New Patio and Pergola",
    excerpt:
      "Experience the community spirit that built Gateway Home's new outdoor space. This heartwarming story details the construction of a decorative concrete patio and pergola, showcasing the power of volunteerism. From initial groundwork to the final touches, learn how local skilled workers and dedicated community members came together to create a beautiful area for residents and their families to enjoy.",
    date: "September 1, 2022",
    author: "Nathan Montford",
    readTime: "2 min read",
    link: "/blog/new-patio-and-pergola",
  },
];

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Gateway Home Blog</h1>
        <p className="text-lg text-muted-foreground">
          Stay updated with the latest news, stories, and updates from our
          community
        </p>
      </div>
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
                    {post.date}
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
    </main>
  );
}
