import { Button } from "@/components/ui/button";
import { events } from "../_data/data";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Event({
  params: { id: eventId },
}: {
  params: { id: string };
}) {
  const event = events.find((event) => event.id === eventId)!;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {event.title}
      </h1>
      <p className="text-sm text-muted-foreground">{event.description}</p>
      {event.content}
      <div>
        <Button asChild>
          <Link target="_blank" href={event.link}>
            {event.action}
          </Link>
        </Button>
      </div>
    </div>
  );
}
