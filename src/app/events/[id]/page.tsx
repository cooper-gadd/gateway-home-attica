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
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {event.title}
      </h1>
      <p className="text-sm text-muted-foreground">{event.type}</p>
      {event.content}
      <div>
        <Button asChild>
          <Link target="_blank" href={event.link}>
            {event.action}
          </Link>
        </Button>
      </div>
    </>
  );
}
