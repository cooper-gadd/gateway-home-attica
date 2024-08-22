import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Events() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Fall Chicken BBQ</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Fundraiser
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Get ready for our Fall Chicken BBQ on Sunday, September 8th! This
            mouth-watering event will take place from noon until 2pm, or until
            we&apos;re sold out. Please note, only 500 tickets will be sold, so
            be sure to secure yours early!
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Each $15.00 ticket includes a hearty meal of ½ chicken, salt
            potatoes, coleslaw, a roll, and a cookie. Pickup will be at the
            Attica Elementary School parking lot.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            To purchase your tickets, simply click the button below to buy
            online. Alternatively, tickets are available at our home, located at
            91 Main St, Attica. You can also call Sue at (585) 708-4331 to
            arrange to purchase tickets by cash or check.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Given the popularity of this event, we usually sell out. Therefore,
            pre-sale is highly encouraged to ensure you don&apos;t miss out on
            this delicious BBQ feast! We look forward to seeing you there!
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link
              target="_blank"
              href="/https://gatewayhomeattica.networkforgood.com/events/74632-fall-chicken-bbq-sun-sept-8th"
            >
              Buy Tickets
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>End of Life Doula</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Training Course
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We are excited to announce an 8-week End of Life Doula training
            course at Gateway Home, beginning Wednesday, September 18th. This
            immersive program is designed to empower caregivers with the skills
            and wisdom to offer compassionate support to those nearing the end
            of life. The class will take place every Wednesday for eight
            consecutive weeks, providing both practical and spiritual tools to
            help those in their final days live fully until they pass.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            <strong>Course Overview:</strong>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            This training will be an in-depth exploration of what it means to be
            a supportive presence in the dying process. Our sessions will
            include:
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>Creating Sacred Space for the Dying: </strong>Learn how to
              transform the environment into a sanctuary that fosters peace and
              comfort for those transitioning.
            </li>
            <li>
              <strong>Holding Space: </strong>Develop the ability to sit with
              others in their most vulnerable moments, offering quiet, attentive
              presence without the need to &quot;fix&quot; anything.
            </li>
            <li>
              <strong>Building a Legacy: </strong>Discover techniques to help
              individuals craft a lasting legacy, documenting and preserving
              their precious memories, stories, and lessons for loved ones.
            </li>
            <li>
              <strong>Holding Vigil: </strong>Learn how to lead a vigil, a
              time-honored tradition of gathering loved ones to witness,
              support, and honor the dying person during their final moments.
            </li>
            <li>
              <strong>Reprocessing the Death: </strong>Gain tools for helping
              families and friends reprocess the passing of their loved one,
              finding closure and peace after the loss.
            </li>
            <li>
              <strong>Preserving Precious Memories: </strong>Delve into methods
              for documenting and safeguarding the stories and moments that
              define a life, creating cherished keepsakes for loved ones to hold
              onto.
            </li>
            <li>
              <strong>Processing Unfinished Business: </strong>Learn to assist
              individuals in addressing any unresolved issues, facilitating
              emotional and spiritual healing before they pass.
            </li>
          </ul>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            <strong>Why Attend?</strong>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            This training will be transformative for caregivers who feel called
            to accompany others during life’s final chapter. Whether you are a
            professional caregiver, family member, or someone seeking a deeper
            understanding of the end-of-life process, this course will provide
            you with the tools and mindset needed to navigate this profound
            journey with grace and compassion. Classes will take place at
            Gateway Home each Wednesday evening starting September 18th from
            6:00-8:00 pm. Space is limited to ensure a personalized and intimate
            experience for all participants.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            To register or learn more about this program, please contact Sara
            Brunner. We hope you’ll join us in this meaningful work of
            supporting others in living fully until their last breath.
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href={"tel:585-708-4331"}>
                <Phone className="mr-2 h-4 w-4" /> Register
              </Link>
            </Button>
            <Button asChild>
              <Link href={"mailto:sara@gatewayhomeattica.org"}>
                <Mail className="mr-2 h-4 w-4" /> Register
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Meat Raffle</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Fundraiser
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Join us on Saturday, September 28, 2024, for an exciting evening at
            the Alexander Firemen’s Recreation Hall, located at 10708 Alexander
            Rd, Alexander, NY 14011. Doors will open at 6:00 pm, with the first
            spin taking place promptly at 7:00 pm.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Presale tickets are available for $10.00 each or $80.00 for a table
            of 8. Tickets at the door will be $15.00. Each ticket includes one
            chance for the door prize, a slice of pizza, and a beverage (soda or
            water).
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The evening will feature a Basket Raffle and 50/50 tickets. Feel
            free to bring snacks to share at your table and a cooler to hold
            your winnings! Please note, no outside alcohol is permitted.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            A cash bar will be available, presented by and benefiting the
            Alexander Fire Department.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            This event is held to benefit Gateway Home Comfort Care, located at
            91 Main Street, Attica, NY 14011. For more information, please
            contact us at 585-708-4331.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We look forward to seeing you there for a night of fun, food, and
            fundraising!
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link
              target="_blank"
              href="https://gatewayhomeattica.networkforgood.com/events/74629-3rd-annual-meat-raffle-sat-9-28"
            >
              Buy Tickets
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
