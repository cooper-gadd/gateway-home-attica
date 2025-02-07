import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video } from "@/components/video-placeholder";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const events = [
    {
      id: 1,
      title: "Community Gathering",
      date: "June 7, 2023",
      description:
        "Join us for our monthly community gathering. Share stories, enjoy refreshments, and connect with others.",
    },
    {
      id: 2,
      title: "Art Therapy Workshop",
      date: "June 14, 2023",
      description:
        "Express yourself through art in our therapeutic workshop led by local artists.",
    },
    {
      id: 3,
      title: "Family Day Picnic",
      date: "June 21, 2023",
      description:
        "Bring your family for a day of fun, games, and delicious food in our beautiful garden.",
    },
    {
      id: 4,
      title: "Music & Memories Concert",
      date: "June 28, 2023",
      description:
        "Enjoy a live performance of classic tunes that will bring back fond memories.",
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
      <section className="relative h-[70vh] bg-muted text-foreground">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Serenity House"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold mb-4">Serenity House</h1>
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
          <p className="text-xl text-center max-w-3xl mx-auto">
            At Serenity House, we are dedicated to providing compassionate,
            high-quality care in a warm and supportive environment. Our mission
            is to enhance the quality of life for our residents and their
            families during life's most challenging moments.
          </p>
        </div>
      </section>

      {/* Resident Care Video Section */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Experience Our Compassionate Care
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Hear directly from our residents and their families about the
            quality of care and life at Serenity House.
          </p>
          <Video
            thumbnailSrc="/placeholder.svg?height=1080&width=1920"
            videoSrc="/path-to-your-promo-video.mp4"
          />
        </div>
      </section>

      {/* Resident Care Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Our Approach to Resident Care
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4 text-center">
              At Serenity House, we believe in a holistic approach to care that
              addresses not just physical needs, but also emotional and social
              well-being. Our dedicated team works tirelessly to create a
              nurturing environment where each resident feels valued, respected,
              and cared for.
            </p>
            <p className="text-lg mb-6 text-center">
              From our 24/7 nursing care to our diverse range of therapies and
              activities, every aspect of our service is designed to enhance the
              quality of life for our residents. We understand that each
              individual has unique needs and preferences, which is why we
              tailor our care plans to each resident.
            </p>
            <div className="text-center">
              <Button asChild>
                <Link href="/care-services">Explore Our Care Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{event.description}</p>
                  <p className="mt-2 font-semibold">Date: {event.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Living at Serenity House Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Inside Serenity House"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
                Living at Serenity House
              </h2>
              <p className="text-lg mb-4 text-foreground">
                At Serenity House, we provide a warm, home-like environment
                where residents can feel comfortable and cared for. Our spacious
                common areas and cozy private rooms are designed to promote both
                social interaction and personal peace.
              </p>
              <p className="text-lg mb-4 text-foreground">
                Our dedicated staff ensures that each resident receives
                personalized care, engaging activities, and nutritious meals
                tailored to their preferences and needs. We strive to create a
                supportive community where residents can thrive and families can
                find peace of mind.
              </p>
              <Button asChild>
                <Link href="/tour">Schedule a Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Volunteer with Us
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Make a difference in the lives of our residents by volunteering at
              Serenity House. We offer various opportunities for individuals to
              share their time, skills, and compassion with our community.
            </p>
            <Button asChild>
              <Link href="/volunteer">Learn About Volunteering</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="py-16 bg-background">
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

      {/* Donations Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Support Our Mission
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
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

      {/* Employment Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Join Our Team
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              At Serenity House, we're always looking for compassionate and
              dedicated individuals to join our team. If you're passionate about
              making a difference in the lives of others, we'd love to hear from
              you.
            </p>
            <Button asChild>
              <Link href="/careers">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-muted">
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
                  <p>
                    Learn about the best practices for providing care and
                    support to your family members in need.
                  </p>
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
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>What services do you offer?</AccordionTrigger>
              <AccordionContent>
                We offer 24/7 nursing care, pain management, emotional support,
                and various therapies tailored to each resident's needs.
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
