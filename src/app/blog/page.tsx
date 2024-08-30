import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { posts } from "./_data/data";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>{post.title}</CardTitle>
              <post.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              {post.author}
            </CardDescription>
          </CardHeader>
          <CardContent>{post.lead}</CardContent>
          <CardFooter>
            <Button asChild>
              {post.link ? (
                <Link href={post.link}>Read More</Link>
              ) : (
                <Link href={`/blog/${post.id}`}>Read More</Link>
              )}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
