import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { events } from "@/data/data";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Event({
  params: { id: eventId },
}: {
  params: { id: string };
}) {
  const event = events.find((event) => event.id === Number(eventId))!;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>{event.title}</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            {event.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {event.content.map((paragraph, index) => (
            <p className="leading-7 [&:not(:first-child)]:mt-6" key={index}>
              {paragraph}
            </p>
          ))}
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link target="_blank" href={event.link}>
              {event.action}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
