import { Button } from "@/components/ui/button";
import { Calendar, Car, Clock, DollarSign, Flag, LucideProps, MapPin } from "lucide-react";
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
    title: "Matching Campaign",
    date: "April 2, 2025 — May 31, 2025",
    description:
      "An anonymous donor is offering to match every donation made to our campaign, dollar-for-dollar, up to $10,000! This is your chance to double the impact of your generosity and help us reach our goal even faster. Every contribution, big or small, will be matched, so there's never been a better time to give. Don't miss out—your gift will go twice as far and make a real difference in our cause. Join us today and make your donation count!",
    icon: DollarSign,
    link: "https://gatewayhomeattica.networkforgood.com/events/84782-matching-campaign-2025",
    linkText: "Donate Now",
  },
  {
    title: "4th Annual Judy Russell Memorial Golf Tournament",
    date: "July 12, 2025",
    description: "Join us for the 4th Annual Judy Russell Memorial Golf Tournament! This four-person scramble format tournament costs $100 per golfer or $400 per team. Entry deadline is June 30, 2025 or until sold out (only 32 teams available). Dinner and awards will follow the tournament, with dinner-only tickets available for $35.",
    icon: Flag,
    location: "Batavia Country Club, 7909 Batavia Byron Rd., Byron, NY 14020",
    time: "11:30 AM - 12:30 PM Registration, 1:00 PM Sharp Shot Gun Start",
  },
  {
    title: "Golfing for Gateway Home Comfort Care 7th Annual Golf Tournament",
    date: "July 24, 2025",
    description: "Join us for our 7th Annual Golf Tournament! This 18-hole scramble format tournament costs $100 per golfer or $400 per team. Your entry fee includes 18 holes of golf, a cart, a hot dog at the turn, dinner by 'A Sweet Ending Bakery', and prizes immediately following the tournament. The entry deadline is July 15th or until sold out (only 22 teams available). Dinner and awards will follow the tournament, with dinner-only tickets available for $25. Don't miss this opportunity to support Gateway Home while enjoying a great day of golf!",
    icon: Flag,
    location: "Quiet Times Golf Course, 2220 Stedman Rd., Attica, NY 14011",
    time: "8:00 AM - 9:15 AM Registration, 9:30 AM Shot Gun Start",
  },
  {
    title: "Junkyard Reunion",
    date: "July 27, 2025",
    description: "All antique/classic vehicles of any kind are welcome! No fees, no judging, just plain fun! This event benefits Gateway Home and spectators are welcome. Join us for a day celebrating classic automobiles with 50/50 drawings and basket raffle. It's a great opportunity to show off your vintage ride or simply enjoy seeing amazing classic vehicles while supporting a great cause.",
    icon: Car,
    location: "Vincent Almeter Memorial Park, Route 98, Varysburg, NY",
    time: "11:00 AM - 4:00 PM",
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
