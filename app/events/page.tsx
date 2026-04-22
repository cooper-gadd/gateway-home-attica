import { Button } from "@/components/ui/button";
import {
  Beef,
  Calendar,
  Car,
  Clock,
  Drumstick,
  Flag,
  HandHeart,
  LandPlot,
  LucideProps,
  MapPin,
  Trophy,
} from "lucide-react";
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
    date: "April 1 - May 15, 2026",
    description:
      "A generous donor will match every gift up to $20,000 — but only through May 15th! Your donation doubles in impact, helping Gateway Home continue providing compassionate, no-cost end-of-life care.",
    icon: HandHeart,
    link: "https://gatewayhomeattica.networkforgood.com/projects/298367-matching-gifts-april-2026",
    linkText: "Double My Gift",
  },
  {
    title: "Spring Chicken BBQ",
    date: "May 3, 2026",
    description:
      "Drive thru chicken BBQ! $15 dinner includes ½ chicken, 2 side dishes, roll & cookie. Pickup at Prospect Elementary Parking Lot.",
    icon: Drumstick,
    time: "12:00 PM - 2:00 PM (or sold out)",
    link: "https://gatewayhomeattica.networkforgood.com/events/99499-2026-spring-chicken-bbq-sunday-may-3rd?hid=MjExMTYwODc=&utm_campaign=dms_email_blast_4563323",
    linkText: "Order Tickets",
    location: "Prospect Elementary Parking Lot",
  },
  {
    title: "Letchworth Masonic Council Benefit Golf Tournament",
    date: "May 23, 2026",
    description:
      "4-person scramble benefiting Gateway Home and other Comfort Care Facilities. $100/person (by May 9th). Dinner only: $40. Sponsor a hole: $50/sign.",
    icon: LandPlot,
    time: "9:00 AM Registration, 10:00 AM Scramble",
    link: "https://d2dgo7ivtbkyn1.cloudfront.net/images/gatewayhomeattica/MASONS%20FORM-combined.pdf",
    linkText: "Registration Form",
  },
  {
    title: "5th Annual Judy Russell Memorial Golf Tournament",
    date: "July 11, 2026",
    description:
      "Join us at Batavia Country Club to honor Judy Russell's memory while supporting Gateway Home Comfort Care. 4-person scramble with sponsorship opportunities available. All donations received by June 20th will be acknowledged on the sponsor board.",
    icon: Trophy,
    time: "11:30 AM Registration | 1:00 PM Shotgun Start",
    location: "Batavia Country Club, 7909 Batavia-Byron Rd., Batavia, NY",
    link: "/judy-russell-golf-2026.pdf",
    linkText: "Registration Form",
  },
  {
    title: "Golfing for Gateway",
    date: "July 23, 2026",
    description: "4 person scramble, 18 holes.",
    icon: Flag,
  },
  {
    title: "Junkyard Reunion",
    date: "July 26, 2026",
    description:
      "All antique & classic vehicles of any kind welcome. No fees, no judging, just plain fun! Dash plaques for first 100 vehicles. Spectators welcome. Food, drinks, 50/50 drawings & basket raffle. Proceeds benefit Gateway Home. Thanks to sponsors: Folsom Trailblazers Snowmobile Club & ProX Window & Doors.",
    icon: Car,
    time: "11:00 AM - 4:00 PM",
    location: "Vincent Almeter Memorial Park, Route 98, Varysburg, NY",
    link: "/gateway-car-show-reg-flyer-2026.pdf",
    linkText: "Registration Form",
  },
  {
    title: "Meat Raffle",
    date: "November 14, 2026",
    description: "Got meat?",
    icon: Beef,
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
