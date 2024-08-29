import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardHeader } from "@/components/ui/card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import { posts } from "../_data/data";

export const dynamic = "force-dynamic";

export default function Event({
  params: { id: postId },
}: {
  params: { id: string };
}) {
  const post = posts.find((post) => post.id === postId)!;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {post.title}
      </h1>
      <p className="text-sm text-muted-foreground">{post.author}</p>
      {post.content}
      {post.images && (
        <InfiniteMovingCards speed="normal">
          <div className="grid auto-cols-max grid-flow-col gap-4 md:gap-8">
            {post.images.map((image) => (
              <Card key={image.src} className="w-96 bg-muted/20">
                <CardHeader>
                  <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      loading="eager"
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                </CardHeader>
              </Card>
            ))}
          </div>
        </InfiniteMovingCards>
      )}
    </div>
  );
}
