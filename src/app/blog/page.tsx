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
    <>
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-orange-400 dark:text-orange-300">
                {post.title}
              </CardTitle>
              <post.icon className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              {post.date} • {post.readTime}
            </CardDescription>
          </CardHeader>
          <CardContent>{post.description}</CardContent>
          <CardFooter>
            <Button variant={"secondary"} asChild>
              {post.href ? (
                <Link href={post.href}>Read More</Link>
              ) : (
                <Link href={`/blog/${post.id}`}>Read More</Link>
              )}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
