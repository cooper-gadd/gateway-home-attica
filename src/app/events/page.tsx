import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { events } from "./_data/data";
import Link from "next/link";

export default function Events() {
  return (
    <>
      {events.map((event) => (
        <Card key={event.id}>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-orange-400 dark:text-orange-300">
                {event.title}
              </CardTitle>
              <event.icon className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              {event.type}
            </CardDescription>
          </CardHeader>
          <CardContent>{event.description}</CardContent>
          <CardFooter className="flex items-center gap-4">
            <Button asChild>
              <Link target="_blank" href={event.link}>
                {event.action}
              </Link>
            </Button>
            <Button asChild>
              <Link href={`/events/${event.id}`}>Learn More</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
