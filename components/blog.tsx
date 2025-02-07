import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface BlogPostProps {
  date: string;
  title: string;
  author: string;
}

export function BlogHeader({ date, title, author }: BlogPostProps) {
  return (
    <header className="mb-8">
      <Badge className="mb-2">{date}</Badge>
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-muted-foreground">{author}</p>
    </header>
  );
}

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export function BlogImage({ src, alt, caption }: BlogImageProps) {
  return (
    <figure className="my-8">
      <AspectRatio
        ratio={16 / 9}
        className="bg-muted rounded-lg overflow-hidden"
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover"
        />
      </AspectRatio>
      {caption && (
        <figcaption className="text-sm text-center text-muted-foreground mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
