import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, LucideProps, MapPin, Music, Utensils } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events at Gateway Home Attica.",
};

const events: {
  title: string;
  date: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  location?: string;
  time?: string;
  buttonText?: string;
  buttonLink?: string;
}[] = [
  {
    title: "Spring Chicken BBQ",
    date: "April 27, 2025",
    description:
      "Join us for our annual Spring Chicken BBQ fundraiser. All proceeds support Gateway Home's mission to provide compassionate end-of-life care to our residents.",
    icon: Utensils,
    location: "Gateway Home, 91 Main Street, Attica, NY",
    time: "Noon - 2:00 PM", 
  },
  {
    title: "First Annual Gateway to Summer",
    date: "June 7, 2025",
    description:
      "Celebrate the beginning of summer with Gateway Home. This family-friendly event features live music, food vendors, activities for children, and opportunities to learn about our services.",
    icon: Music,
  },
];

export default function EventsPage() {
  return (
    <main>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Join us for these upcoming events supporting Gateway Home
                </p>
                <p className="text-md mb-8">
                  Our events bring together our community to celebrate, remember, and support our mission of providing compassionate care.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="grid grid-cols-1 gap-12">
                {events.map((event) => (
                  <Card
                    key={event.title}
                    className="overflow-hidden transition-shadow hover:shadow-lg bg-muted/40"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 flex items-center justify-center p-6 bg-primary/10">
                        <event.icon className="h-24 w-24 text-primary/70" />
                      </div>
                      <div className="md:w-3/4 p-6">
                        <CardHeader className="p-0 pb-4">
                          <CardTitle className="text-2xl">{event.title}</CardTitle>
                          <div className="flex flex-wrap items-center gap-4 text-sm mt-2">
                            <span className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                              <Calendar className="h-4 w-4" />
                              {event.date}
                            </span>
                            {event.time && (
                              <span className="flex items-center gap-2 text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                {event.time}
                              </span>
                            )}
                            {event.location && (
                              <span className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                {event.location}
                              </span>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="p-0 pt-4">
                          <p className="mb-6">{event.description}</p>
                          {event.buttonText && event.buttonLink && (
                            <Button asChild>
                              <Link href={event.buttonLink}>
                                {event.buttonText}
                              </Link>
                            </Button>
                          )}
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Host Your Own Fundraiser</h2>
                <p className="text-lg mb-8">
                  Interested in organizing a fundraiser to support Gateway Home? We welcome community-led initiatives that help us continue our mission.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/contact">Contact Us to Learn More</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
