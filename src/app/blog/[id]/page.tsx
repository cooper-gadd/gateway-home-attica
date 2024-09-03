import { posts } from "../_data/data";

export const dynamic = "force-dynamic";

export default function Event({
  params: { id: postId },
}: {
  params: { id: string };
}) {
  const post = posts.find((post) => post.id === postId)!;

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {post.title}
      </h1>
      <p className="text-sm text-muted-foreground">{post.author}</p>
      {post.content}
    </>
  );
}
