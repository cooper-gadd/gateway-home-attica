import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Video } from "@/components/video-placeholder";
import Image from "next/image";
import Link from "next/link";
import homeFront from "./home-front.jpg";
import residentRoom from "./resident-room.jpg";

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

  const newsletters = [
    {
      id: 1,
      title: "Spring 2023 Newsletter",
      pdfUrl: "/newsletters/spring-2023.pdf",
    },
    {
      id: 2,
      title: "Winter 2022 Newsletter",
      pdfUrl: "/newsletters/winter-2022.pdf",
    },
    {
      id: 3,
      title: "Fall 2022 Newsletter",
      pdfUrl: "/newsletters/fall-2022.pdf",
    },
  ];

  const leadershipTeam = [
    {
      name: "Jane Doe",
      role: "Executive Director",
      imageSrc: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "John Smith",
      role: "Director of Nursing",
      imageSrc: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Emily Johnson",
      role: "Activities Coordinator",
      imageSrc: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-muted/40 text-foreground">
        <Image
          src={homeFront}
          alt="Gateway Home"
          width={1920}
          height={1080}
          className="opacity-50 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold mb-4">Gateway Home</h1>
          <p className="text-xl max-w-2xl">
            A place of comfort, care, and compassion
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Our Mission
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto text-foreground">
            We provide free comfort care for those nearing the end of life. Our
            team supports residents and families with medical and spiritual
            care. As a nonprofit, we rely on community donations to serve those
            in need.
          </p>
        </div>
      </section>

      {/* Resident Care Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Our Approach to Resident Care
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6 text-center text-foreground">
              Gateway Home provides free comfort care for terminally ill
              patients in their final three months. Our staff and volunteers
              care for two residents at a time, 24/7.
            </p>
            <p className="text-lg mb-6 text-center text-foreground">
              We focus on comfort care, pain management, and family support. Our
              services include around-the-clock care, meals, laundry,
              companionship, and emotional support - all while respecting each
              person&apos;s dignity.
            </p>
            <p className="text-lg mb-6 text-center text-foreground">
              We accept residents based on need alone, regardless of background.
              Referrals come from healthcare providers, social workers, clergy,
              family or individuals. Those unable to receive care at home get
              priority.
            </p>
            <p className="text-lg mb-6 text-center text-foreground">
              Our services are completely free. We rely entirely on donations,
              fundraising, and community support.
            </p>
          </div>
        </div>
      </section>

      {/* Living at Serenity House Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src={residentRoom}
                alt="Inside Serenity House"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
                Living at Gateway Home
              </h2>
              <p className="text-lg mb-4 text-foreground">
                Gateway Home offers comfort and dignity for residents in their
                final days. Our staff and volunteers provide quality care in a
                warm, welcoming environment. We offer medical care, emotional
                support, and spiritual care tailored to each resident&apos;s
                needs. Our community provides a sense of belonging through
                personalized attention and care.
              </p>
              <p className="text-lg mb-4 text-foreground">
                We believe everyone deserves dignity and respect in their final
                days. Our peaceful environment and compassionate care extend to
                both residents and their families. We work closely with families
                to ensure their loved ones receive the support they need.
                We&apos;re proud to welcome you to our Gateway Home community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resident Care Video Section */}
      <section className="bg-muted/40">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Experience Our Compassionate Care
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Hear directly from our residents and their families about the
            quality of care and life at Gateway Home.
          </p>
          <Video
            thumbnailSrc="/placeholder.svg?height=1080&width=1920"
            videoSrc="/path-to-your-promo-video.mp4"
          />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent>{event.description}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Volunteer with Us
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6 text-foreground">
              Make a difference in the lives of our residents by volunteering at
              Gateway House. We offer various opportunities for individuals to
              share their time, skills, and compassion with our community.
            </p>
            <Button asChild>
              <Link href="/volunteer">Learn About Volunteering</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Donations Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Support Our Mission
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6 text-foreground">
              Your generous donations help us continue providing exceptional
              care and creating a nurturing environment for our residents. Every
              contribution, no matter the size, makes a significant impact on
              the lives of those we serve.
            </p>
            <Button asChild>
              <Link href="/donate">Make a Donation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader) => (
              <Card key={leader.name}>
                <CardContent className="flex flex-col items-center p-6">
                  <Image
                    src={leader.imageSrc || "/placeholder.svg"}
                    alt={leader.name}
                    width={150}
                    height={150}
                    className="rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-muted-foreground">{leader.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employment Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Join Our Team
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6 text-foreground">
              At Serenity House, we&apos;re always looking for compassionate and
              dedicated individuals to join our team. If you&apos;re passionate
              about making a difference in the lives of others, we&apos;d love
              to hear from you.
            </p>
            <Button asChild>
              <Link href="/careers">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Latest from Our Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((post) => (
              <Card key={post}>
                <CardHeader>
                  <CardTitle>
                    Caring for Your Loved Ones: Tips and Advice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Learn about the best practices for providing care and support
                  to your family members in need.
                  <Button variant="link" asChild className="mt-2 p-0">
                    <Link href={`/blog/post-${post}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Previous Newsletters */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Previous Newsletters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsletters.map((newsletter) => (
              <Card key={newsletter.id}>
                <CardHeader>
                  <CardTitle>{newsletter.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild>
                    <a
                      href={newsletter.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View PDF
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>What services do you offer?</AccordionTrigger>
              <AccordionContent>
                We offer 24/7 nursing care, pain management, emotional support,
                and various therapies tailored to each resident&apos;s needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How can I arrange a visit?</AccordionTrigger>
              <AccordionContent>
                You can arrange a visit by contacting our admissions team. They
                will guide you through the process and schedule a convenient
                time for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What amenities are available?</AccordionTrigger>
              <AccordionContent>
                Our facility includes private rooms, communal areas, a garden,
                library, and specialized equipment to ensure comfort and care
                for all residents.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Contact Us
          </h2>
          <div className="max-w-lg mx-auto text-center">
            <p className="mb-2">
              <strong>Address:</strong> 123 Comfort Lane, Serenity City, SC
              12345
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p className="mb-4">
              <strong>Email:</strong> info@serenityhouse.com
            </p>
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
