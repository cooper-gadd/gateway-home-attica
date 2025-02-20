import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { VideoPlaceholder } from "@/components/video-placeholder";
import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import homeFront from "./assets/home-front.jpg";

export default function Home() {
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

  const leadershipTeam = [
    {
      name: "Doug Domes",
      role: "Board President",
      page: "/leadership/doug-domes",
    },
    {
      name: "Jim Russell",
      role: "Board Vice President",
      page: "/leadership/jim-russell",
    },
    {
      name: "Todd Gadd",
      role: "Board Treasurer",
      page: "/leadership/todd-gadd",
    },
    {
      name: "Donna Ferry",
      role: "Board Member",
      page: "/leadership/donna-ferry",
    },
    {
      name: "Kimberly Kadziolka",
      role: "Board Member",
      page: "/leadership/kimberly-kadziolka",
    },
    {
      name: "Sara Brunner",
      role: "Director",
      page: "/leadership/sara-brunner",
    },
    {
      name: "Sue Herman",
      role: "Office Manager",
      page: "/leadership/sue-herman",
    },
  ];

  const newsletters = [
    {
      id: 1,
      title: "Fall 2024/Winter 2025",
      pdfUrl: "/newsletters/fall-2024-winter-2025.pdf",
    },
    {
      id: 2,
      title: "Spring/Summer 2024",
      pdfUrl: "/newsletters/spring-summer-2024.pdf",
    },
    {
      id: 3,
      title: "Spring 2023",
      pdfUrl: "/newsletters/spring-2023.pdf",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src={homeFront}
          alt="Gateway Home"
          width={1920}
          height={1080}
          className="absolute w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Gateway Home</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            A place of comfort, care, and compassion
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Gateway Home is established to give comfort care to people who are
            medically determined to be in their last stages of life. We provide
            both medical and spiritual care to support our residents and their
            families during this important transition.
          </p>
        </div>
      </section>

      {/* Resident Care Section */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Our Approach to Resident Care
              </h2>
              <p className="text-lg mb-6">
                At Gateway Home, we offer a holistic approach to care that
                addresses physical, emotional, and spiritual needs. Our
                dedicated staff and trained volunteers provide 24/7 comfort
                care, symptom control, and pain management for our residents.
              </p>
              <Button asChild>
                <Link href="/care">Learn More About Our Care</Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Resident Care"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  {event.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Volunteer with Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Make a difference in the lives of our residents by
                  volunteering your time and skills.
                </p>
                <Button asChild>
                  <Link href="/volunteer">Learn About Volunteering</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Support Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Your donations help us continue providing exceptional care to
                  our residents.
                </p>
                <Button asChild>
                  <Link href="/donate">Make a Donation</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((leader) => (
              <Link href={leader.page} key={leader.name} className="group">
                <Card className="h-full transition-transform group-hover:scale-105">
                  <CardContent className="p-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt={leader.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold text-center">
                      {leader.name}
                    </h3>
                    <p className="text-sm text-center text-muted-foreground">
                      {leader.role}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Experience Our Compassionate Care
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Hear directly from our residents and their families about the
            quality of care and life at Gateway Home.
          </p>
          <VideoPlaceholder />
        </div>
      </section>

      {/* Contact and Newsletter */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <div className="space-y-4 mb-6">
                <p>
                  <strong>Address:</strong> 91 Main Street, Attica, NY 14011
                </p>
                <p>
                  <strong>Phone:</strong> (585) 708-4331
                </p>
                <p>
                  <strong>Email:</strong> info@Gatewayhouse.com
                </p>
              </div>
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </Card>
            <Card className="p-6">
              <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
              <p className="mb-4">
                Subscribe to our newsletter for updates and resources.
              </p>
              <form className="flex gap-4 mb-6">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow"
                />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-sm text-muted-foreground">
                Join our community to receive the latest news, event updates,
                and resources.
              </p>
            </Card>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Recent Newsletters</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {newsletters.map((newsletter) => (
                <Link
                  key={newsletter.id}
                  href={newsletter.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    <span className="font-medium">{newsletter.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
