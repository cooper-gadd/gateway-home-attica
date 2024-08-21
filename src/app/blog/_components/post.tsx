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
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

type Post = {
  title: string;
  author: string;
  content: string[];
  images?: {
    src: string;
    alt: string;
  }[];
};

export function Post({ post }: { post: Post }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>{post.title}</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          {post.author}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="prose max-w-none">
          {post.content.map((paragraph, index) => (
            <p className="leading-7 [&:not(:first-child)]:mt-6" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
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
                  <AspectRatio ratio={16 / 9} className="bg-muted">
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
  );
}
