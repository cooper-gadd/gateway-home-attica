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

      {/* Living at Gateway House Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src={residentRoom}
                alt="Inside Gateway House"
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
              At Gateway House, we&apos;re always looking for compassionate and
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
              <AccordionTrigger>
                What are Palliative Care, Hospice and Comfort Care?
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Palliative care can be appropriate at any stage of an illness.
                  It is a holistic approach to health care that goes beyond the
                  physical wellbeing of the resident, attending to their
                  spiritual, emotional and psychological needs. Hospice care is
                  a specialized form of palliative care designed to support
                  those in the final stages of a terminal illness. Comfort Care
                  is available during the last 90 days of someone’s life with
                  the resident and family agreeing there will be no heroic
                  measures taken to prolong life.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How is Gateway Home Funded?</AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Our services are provided free-of-charge to our home’s
                  residents. We are an independent, not-for-profit organization
                  and money to run Gateway Home is generated entirely through
                  community support, donations and grants. Our annual operating
                  expenses must be covered by monies received from memorials,
                  honorary donations, bequests, donations from people,
                  corporations, service organizations, plus grants and
                  fund-raising events.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  A nonprofit grant is financial support given to nonprofits by
                  corporations, foundations, or government agencies. They are
                  beneficial for nonprofits because they provide the opportunity
                  for additional funding that doesn’t need to be paid back and
                  they increase awareness of their organization. Grants have
                  also allowed us to make some improvements to our property that
                  wouldn’t have been possible without the additional funding.
                  Gateway Home relies solely on fundraising, memorials,
                  donations, and grants for funding. With operating expenses
                  exceeding $200k per year a lot of hard work and research is
                  done to apply for grants in hopes of receiving funds to help
                  keep our doors open. Gateway Home has been fortunate enough to
                  be granted several grants over the years that allowed the
                  doors to open and that have helped make it possible for us to
                  serve our community.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  We have been generously supported by various grant sources.
                  The <strong>Hope</strong> grant was used for home improvement.
                  The <strong>Conable Family Foundation</strong> and the{" "}
                  <strong>East Hill Foundation</strong> grants were utilized for
                  renovations. The <strong>William F. Thiel Trust</strong>{" "}
                  provided us with funds for medical equipment. The{" "}
                  <strong>Ralph C. Wilson Legacy Funds</strong> were used for
                  caregiver training and operating expenses.{" "}
                  <strong>Home Depot</strong> provided us with a grant for an
                  ADA compliant ramp. The{" "}
                  <strong>Garman Family Foundation</strong> funded a generator
                  for us. <strong>United Way</strong> contributed to our
                  operating expenses, and the{" "}
                  <strong>Odd Fellow & Rebekah</strong> grant was used for
                  nurses and care aid payroll. These grants have played a
                  significant role in helping us continue to fulfill our
                  mission.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Do you receive help from the government?
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  We do not receive any financial funding from the government or
                  from insurance companies.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Who provides direct care at Gateway Home?
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  All care given at Gateway Home is provided by volunteers or
                  staff members who are trained to provide the best possible
                  care. We change caregivers every two hours during our day and
                  evening shifts so our caregivers come in renewed and
                  refreshed. Our overnight shift from 10-8 is usually manned by
                  one caregiver. Interested individuals do not need to have any
                  healthcare experience to become a volunteer – just an open
                  heart and a willingness to learn how to care for another
                  person. We help volunteers do the rest!
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Who is eligible for admission to Gateway Home?
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Admission to Gateway Home is based on an assessment of those
                  who have the greatest need and the fewest options. A physician
                  must have determined that the person has a terminal illness
                  and is in their last three months of life. We are not able to
                  accept every person who is referred and can only care for up
                  to two dying residents at one time. Each case is evaluated
                  carefully by our Assessment Caregivers and Director of
                  Resident Care and priority is given to those people who have
                  the greatest need at the time; i.e., those who are at home
                  with limited adequate care giving support. Other
                  considerations involve the complexity of nursing care that
                  some people may require.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  We do not use intravenous fluids, feeding tubes or CPR
                  (resuscitation). It ensures that comfort care, pain
                  management, and symptom control will accompany a natural death
                  process, in an atmosphere filled with love. It is not uncommon
                  to have multiple people waiting for the next available bed.
                  When a bed is available, our Assessment team evaluates all who
                  are waiting, and choose the one who has the greatest need; not
                  who is next on the list for admission.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                What is the process for admission to Gateway Home?
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  The process for admission to Gateway Home begins with a
                  referral from a physician, social worker, family member,
                  friend, or other healthcare provider. Once a referral is
                  received, our Assessment team will contact the person who is
                  referred to schedule an assessment. The assessment is done in
                  the person’s home or hospital room and takes about an hour.
                  During the assessment, the person’s medical history, current
                  symptoms, and care needs are discussed. The person’s family
                  members or caregivers are also encouraged to participate in
                  the assessment. After the assessment is completed, the person
                  is placed on our waiting list. When a bed becomes available,
                  the person is admitted to Gateway Home. The person’s family
                  members or caregivers are encouraged to visit Gateway Home
                  before the person is admitted to become familiar with the
                  facility and meet the staff. Once the person is admitted, the
                  person’s family members or caregivers are encouraged to visit
                  as often as they like. We also encourage family members or
                  caregivers to participate in the person’s care as much as they
                  are able. We believe that family members and caregivers are an
                  important part of the person’s care team and we welcome their
                  involvement. We also provide support and education to family
                  members and caregivers to help them care for their loved one.
                  We believe that involving family members and caregivers in the
                  person’s care helps to improve the person’s quality of life
                  and provides comfort and support to the person and their
                  family members or caregivers. We also provide support and
                  education to family members and caregivers to help them care
                  for their loved one. We believe that involving family members
                  and caregivers in the person’s care helps to improve the
                  person’s quality of life and provides comfort and support to
                  the person and their family members or caregivers.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                What items should my loved one bring to Gateway Home?
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  For essential documents, please bring current medications,
                  insurance and Social Security cards, and DNR, Health Care
                  Proxy, and MOLST forms.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Personal care items should include comfortable clothing such
                  as pajamas and undergarments, as well as favorite blankets and
                  pillows.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  For comfort and entertainment, we recommend bringing special
                  pictures and photos, favorite foods, snacks, and drinks, as
                  well as music/media players and headphones.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Please also bring contact information including addresses,
                  phone numbers, and emails for family and friends.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                What if my loved one who is residing at Gateway Home lives
                beyond three months?
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  At times there may be remission of a person’s disease, and it
                  may be necessary to be discharged from Gateway Home to an
                  alternative placement: such as home, or moving in with a
                  family member, or to a Nursing home. It’s amazing to see, and
                  such a blessing, that with some conditions, proper symptom
                  control management, socialization and tender loving care,
                  people do go into remission and live longer than what was
                  expected. The staff at Gateway Home will work closely with the
                  Hospice team and family to determine the best alternative
                  placement for our resident. Residents may return to Gateway
                  Home and die peacefully when that time is appropriate and a
                  bed is available.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                Are volunteer opportunities available?
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  YES! In fact, we could not operate without volunteers. There
                  are many volunteer roles, so please consider your individual
                  gifts and how you might utilize those to support the Gateway
                  Home. The greatest need is resident care volunteers. If you
                  prefer not to work with residents, there are numerous other
                  opportunities available.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
              <strong>Address:</strong> 123 Comfort Lane, Gateway City, SC 12345
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p className="mb-4">
              <strong>Email:</strong> info@Gatewayhouse.com
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
