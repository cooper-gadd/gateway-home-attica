import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const events = [
  {
    id: 1,
    title: "Pancake Breakfast",
    date: "February 23rd",
    description:
      "Join us from 8:00am to 1:00pm for our annual Pancake Breakfast. This will take place at the Alden Fire Department substation #2 (11856 Broadway, Alden NY). This is a free will offering event.",
  },
  {
    id: 2,
    title: "Spring Chicken BBQ",
    date: "May",
    description: "Join us for our annual Spring Chicken BBQ.",
  },
  {
    id: 3,
    title: "First Annual Gateway to Summer",
    date: "June",
    description: "Celebrate the start of summer with Gateway Home.",
  },
];

export default function EventsPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <Card key={event.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">{event.description}</CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
