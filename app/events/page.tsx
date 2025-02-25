import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events at Gateway Home Attica.",
};

const events = [
  {
    title: "Spring Chicken BBQ",
    date: "April 27, 2025",
  },
  {
    title: "First Annual Gateway to Summer",
    date: "June 7, 2025",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
                <p className="text-lg text-muted-foreground">
                  Join us for these upcoming events for Gateway Home
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Events Section */}
      <div className="border-grid border-b border-border">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="grid grid-cols-1 gap-8">
                {events.map((event) => (
                  <Card
                    key={event.title}
                    className="h-full transition-shadow hover:shadow-lg flex flex-col bg-muted/40"
                  >
                    <CardHeader className="flex-none pb-4">
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm mt-2">
                        <span className="text-muted-foreground">
                          {event.date}
                        </span>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
