import { Button } from "@/components/ui/button";
import { Beef, Calendar, Clock, LucideProps, MapPin } from "lucide-react";
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
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  location?: string;
  time?: string;
  links?: {
    label: string;
    href: string;
    variant?: "default" | "outline";
  }[];
}[] = [
  {
    title: "Meat Raffle",
    date: "November 14, 2026",
    time: "6:00–10:00 PM",
    location: "Alexander Fireman's Recreation Hall, 10708 Alexander Rd, Alexander, NY",
    description:
      "We will MEAT you there. Doors at 6pm, drawings at 7pm. $15 includes a door-prize chance and unlimited beer, wine, and soda, plus a basket raffle and 50/50. Sabres raffle chances are $10, or 3 for $20. Bring snacks and a cooler. No outside alcohol.",
    icon: Beef,
    links: [
      {
        label: "Get Tickets",
        href: "https://gatewayhomeattica.networkforgood.com/events/106046-2026-meat-raffle-saturday-nov-14th",
      },
      {
        label: "Sponsor",
        href: "/donate#sponsorship",
      },
      {
        label: "Sabres Raffle",
        href: "https://gatewayhomeattica.networkforgood.com/events/106063-sabres-game-raffle",
        variant: "outline",
      },
    ],
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
                    <h2 className="text-3xl font-semibold mb-4">No Upcoming Events</h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                      <span className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                        <Calendar className="h-4 w-4" />
                        Check back soon
                      </span>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      There are currently no upcoming events scheduled. Please check back later for
                      future events supporting Gateway Home. We regularly organize fundraisers and
                      community gatherings to support our mission.
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
                      <h2 className="text-3xl font-semibold mb-4">{event.title}</h2>
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
                      {event.links && event.links.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-3">
                          {event.links.map((link, index) => {
                            const external = link.href.startsWith("http");
                            return (
                              <Button
                                key={link.href}
                                asChild
                                variant={link.variant ?? (index === 0 ? "default" : "outline")}
                                className="px-6"
                              >
                                <Link
                                  href={link.href}
                                  {...(external
                                    ? { target: "_blank", rel: "noopener noreferrer" }
                                    : {})}
                                >
                                  {link.label}
                                </Link>
                              </Button>
                            );
                          })}
                        </div>
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
                <h2 className="text-3xl font-bold mb-6">Host Your Own Fundraiser</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Interested in organizing a fundraiser to support Gateway Home? We welcome
                  community-led initiatives that help us continue our mission.
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
