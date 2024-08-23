import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
      <div className="flex flex-col items-center justify-center">
        <Carousel className="w-3/4 max-w-3xl">
          <CarouselContent>
            {post.images.map((image, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
