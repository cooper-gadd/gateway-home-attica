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
    id: 1,
    title: "First Annual Gateway Home Memorial Service",
    excerpt:
      "Gateway Home hosted its first annual Memorial Service at the 1st Baptist Church in Attica, honoring 77 residents who passed away in our care. The evening featured songs, remembrance, and fellowship, establishing a new yearly tradition each November.",
    date: "November 13, 2024",
    author: "Sara Brunner",
    readTime: "3 min read",
    link: "/blog/first-annual-gateway-home-memorial-service",
  },
  {
    id: 2,
    title: "Gateway Home Dedicates Brick Walkways",
    excerpt:
      "Join Gateway Home as they unveil their touching new memorial brick walkways. This article captures the emotional dedication ceremony, where each brick represents a cherished memory of a former resident. Discover how this project, supported by the East Hill Foundation, has transformed the home's exterior while creating a lasting tribute to those who have passed. Director Sara Brunner and President Doug Domes share insights on the project's significance and the continued community support that makes Gateway Home's mission possible.",
    date: "July 13, 2024",
    author: "Brain Quinn",
    readTime: "4 min read",
    link: "/blog/gateway-home-dedicates-brick-walkways",
  },
  {
    id: 3,
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
      <h1 className="text-4xl font-bold text-center mb-12">
        Gateway Home Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Link href={post.link} key={post.id} className="group">
            <Card className="h-full transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {post.readTime}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
