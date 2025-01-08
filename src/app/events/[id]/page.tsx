import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { events } from "../_data/data";

export const dynamic = "force-dynamic";

export default function Event({
  params: { id: eventId },
}: {
  params: { id: string };
}) {
  const event = events.find((event) => event.id === eventId)!;

  return (
    <>
      <div>
        <Badge>{event.type}</Badge>
      </div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {event.title}
      </h1>
      {event.content}
      <div>
        {event.action && (
          <Button asChild>
            <Link target="_blank" href={event.link ?? "#"}>
              {event.action}
            </Link>
          </Button>
        )}
      </div>
    </>
  );
}
