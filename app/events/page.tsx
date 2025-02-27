import { Calendar, Clock, LucideProps, MapPin, Music, Utensils } from "lucide-react";
import { Metadata } from "next";
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
}[] = [
  {
    title: "Spring Chicken BBQ",
    date: "April 27, 2025",
    description:
      "Join us for our annual Spring Chicken BBQ fundraiser. All proceeds support Gateway Home's mission to provide compassionate end-of-life care to our residents. Please bring your returnable bottles and cans to the barbeque. We will gladly unload them for you!",
    icon: Utensils,
    location: "Attica Elementary School parking lot",
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
      {/* Header Section */}
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

      {/* Events Section */}
      {events.map((event) => (
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
                      <p className="text-muted-foreground text-lg leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
            </section>
          </div>
        </div>
      ))}

      {/* Host Your Own Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Host Your Own Fundraiser
                </h2>
                <p className="text-lg mb-8">
                  Interested in organizing a fundraiser to support Gateway Home? We
                  welcome community-led initiatives that help us continue our
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
