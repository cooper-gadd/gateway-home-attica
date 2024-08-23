import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { posts } from "@/data/data";

export const dynamic = "force-dynamic";

export default function Post({
  params: { id: postId },
}: {
  params: { id: string };
}) {
  const post = posts.find((post) => post.id === Number(postId))!;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>{post.title}</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            {post.author}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {post.content.map((paragraph, index) => (
            <p className="leading-7 [&:not(:first-child)]:mt-6" key={index}>
              {paragraph}
            </p>
          ))}
        </CardContent>
        {post.images && (
          <CardFooter className="flex flex-col">
            <Carousel className="w-3/4 max-w-lg lg:w-full">
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
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
