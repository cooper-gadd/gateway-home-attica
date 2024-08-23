import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export function Images({
  images,
}: {
  images: {
    src: string;
    alt: string;
  }[];
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Carousel className="w-3/4 max-w-3xl">
        <CarouselContent>
          {images.map((image, index) => (
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
  );
}
