import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { leadership } from "./_data/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Page() {
  return (
    <>
      {leadership.map((leader) => (
        <Card key={leader.id}>
          <CardHeader>
            <CardTitle className="text-orange-400 dark:text-orange-300">
              {leader.name}
            </CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              {leader.position}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
            <div className="w-full flex-shrink-0 md:w-[250px]">
              <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className={cn(
                    "rounded-md object-cover",
                    leader.image === "/images/placeholder.svg" &&
                      "dark:brightness-[0.2] dark:grayscale",
                  )}
                />
              </AspectRatio>
            </div>
            <div className="flex-grow">
              {leader.bio?.map((paragraph, index) => (
                <p className="leading-7 [&:not(:first-child)]:mt-6" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
