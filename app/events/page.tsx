import { Button } from "@/components/ui/button";
import { Calendar, Clock, Drumstick, LucideProps, MapPin, Ticket } from "lucide-react";
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
  link?: string;
  linkText?: string;
}[] = [
  {
    title: "Chicken BBQ",
    date: "September 21st, 2025",
    description: "Time for a fall BBQ! The $15 dinner includes ½ chicken, 2 sides, roll, & cookie. THANK YOU SO MUCH TO OUR FAITHFUL BBQ SUPPORTERS! Can't wait to see you all on Sunday!",
    time: "Noon - 2:00 PM",
    location: "Prospect Elementary Parking Lot",
    icon: Drumstick,
    link: "https://gatewayhomeattica.networkforgood.com/events/90764-2025-fall-chicken-bbq",
    linkText: "Buy Tickets",
  },
  {
    title: "Meat Raffle",
    date: "November 15th, 2025",
    time: "6:00 PM",
    description: "Join us for a meat raffle! The tickets are $15 per person. This includes door prize entry, slice of pizza, and unlimited water or pop.",
    icon: Ticket,
    location: "Alexander Fire Hall",
    link: "https://gatewayhomeattica.networkforgood.com/events/91517-2025-meat-raffle",
    linkText: "Buy Tickets",
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
                <p className="text-lg text-muted-foreground">
                  Join us for these upcoming events supporting Gateway Home
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {events.length === 0 ? (
        <div className="border-grid border-b">
          <div className="container-wrapper">
            <section className="py-24">
              <div className="container">
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="w-full md:w-[300px] flex-shrink-0">
                    <div className="aspect-square bg-primary/10 rounded-lg items-center justify-center md:flex hidden">
                      <Calendar className="h-32 w-32 text-primary/70" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-3xl font-semibold mb-4">
                      No Upcoming Events
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                      <span className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                        <Calendar className="h-4 w-4" />
                        Check back soon
                      </span>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      There are currently no upcoming events scheduled. Please
                      check back later for future events supporting Gateway
                      Home. We regularly organize fundraisers and community
                      gatherings to support our mission.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        events.map((event) => (
          <div key={event.title} className="border-grid border-b">
            <div className="container-wrapper">
              <section className="py-24">
                <div className="container">
                  <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-[300px] flex-shrink-0">
                      <div className="aspect-square bg-primary/10 rounded-lg items-center justify-center md:flex hidden">
                        <event.icon className="h-32 w-32 text-primary/70" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-3xl font-semibold mb-4">
                        {event.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
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
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {event.description}
                      </p>
                      {event.link && event.linkText && (
                        <Button asChild className="mt-6 px-6">
                          <Link
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {event.linkText}
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        ))
      )}

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Host Your Own Fundraiser
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Interested in organizing a fundraiser to support Gateway Home?
                  We welcome community-led initiatives that help us continue our
                  mission.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
