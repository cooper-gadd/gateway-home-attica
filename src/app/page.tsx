import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Calendar,
  Clock,
  Coins,
  DoorOpen,
  Flag,
  HandHeart,
  Heart,
  HeartHandshake,
  HelpingHand,
  HomeIcon,
  Medal,
  Ribbon,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { donors, leadership } from "./_data/data";

export default function Home() {
  return (
    <>
      <Card>
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Gateway Home
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            Providing free, dignified care and spiritual support for those in
            their final stages of life.
          </CardDescription>
          <div>
            <Button variant={"ghost"} asChild>
              <Link href={"/about/mission-statement"}>Learn More</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
              <div className="md:col-span-2">
                <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                  <Image
                    src={`/images/home/gateway-home/front.jpg`}
                    alt={`Front of Gateway Home`}
                    fill
                    loading="eager"
                    className="h-full rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                <Image
                  src={`/images/home/gateway-home/dedication-brick.jpg`}
                  alt={`Dedication of Gateway Home`}
                  fill
                  loading="eager"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                <Image
                  src={`/images/home/gateway-home/established-brick.jpg`}
                  alt={`Established Brick at Gateway Home`}
                  fill
                  loading="eager"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <div className="md:col-span-2">
                <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                  <Image
                    src={`/images/home/gateway-home/back.jpg`}
                    alt={`Back of Gateway Home`}
                    fill
                    loading="eager"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Compassionate Care</CardTitle>
              <HeartHandshake className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Providing free, dignified care and spiritual support for
              individuals in their final months of life.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Community-Funded Support</CardTitle>
              <HandHeart className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Operations are funded entirely through donations, grants,
              bequests, and community generosity.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Admission Based on Need</CardTitle>
              <DoorOpen className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Admission is determined solely by need, ensuring care for those
              most vulnerable.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <Card>
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Resident Care
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            Offering full-time care, emotional support, and a home-like
            environment for terminally ill residents.
          </CardDescription>
          <div>
            <Button variant={"ghost"} asChild>
              <Link href={"/about/resident-care"}>Learn More</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="container">
            <video
              width="2000"
              controls
              preload="none"
              loop
              muted
              autoPlay
              playsInline
              className="h-full w-full rounded-md object-cover"
            >
              <source src="/videos/promo.mp4" type="video/mp4" />
              <track
                src="/captions/promo.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
            </video>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>24/7 Care</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Around-the-clock care for residents, including pain management,
              meals, and companionship.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Family Respite</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Offering emotional and spiritual support to both residents and
              their families.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>No Financial Burden</CardTitle>
              <Coins className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Care is provided free of charge, with no insurance involvement.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <Card>
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Life at Gateway Home
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            Creating a welcoming environment where residents receive
            personalized, compassionate care.
          </CardDescription>
          <div>
            <Button variant={"ghost"} asChild>
              <Link href={"/about/life-at-gateway-home"}>Lean More</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
              <div className="md:col-span-2">
                <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                  <Image
                    src={`/images/home/life-at-gateway-home/resident-room.jpg`}
                    alt={`Resident Room at Gateway Home`}
                    fill
                    loading="eager"
                    className="h-full rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                <Image
                  src={`/images/home/life-at-gateway-home/kitchen.jpg`}
                  alt={`Kitchen at Gateway Home`}
                  fill
                  loading="eager"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                <Image
                  src={`/images/home/life-at-gateway-home/hallway.jpg`}
                  alt={`Hallway at Gateway Home`}
                  fill
                  loading="eager"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <div className="md:col-span-2">
                <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                  <Image
                    src={`/images/home/life-at-gateway-home/living-room.jpg`}
                    alt={`Living Room at Gateway Home`}
                    fill
                    loading="eager"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Homelike Setting</CardTitle>
              <HomeIcon className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              A warm, welcoming environment where residents feel at home in
              their final days.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Individualized Support</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Personalized care tailored to the unique needs of each resident.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Sense of Belonging</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Creating a community atmosphere where residents and families feel
              connected.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <Card>
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Our Story
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            Learn about the founding of Gateway Home and our mission to provide
            compassionate end-of-life care.
          </CardDescription>
          <div>
            <Button variant={"ghost"} asChild>
              <Link href={"/about/our-story"}>Lean More</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
              <div className="md:col-span-2">
                <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                  <Image
                    src={`/images/home/our-story/established-event.jpg`}
                    alt={`Established Event at Gateway Home`}
                    fill
                    loading="eager"
                    className="h-full rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                <Image
                  src={`/images/home/our-story/va.jpg`}
                  alt={`Veterans at Gateway Home`}
                  fill
                  loading="eager"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                <Image
                  src={`/images/home/our-story/demo.jpg`}
                  alt={`Demolition at Gateway Home`}
                  fill
                  loading="eager"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <div className="md:col-span-2">
                <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                  <Image
                    src={`/images/home/our-story/first-fundraiser.jpg`}
                    alt={`First Fundraiser at Gateway Home`}
                    fill
                    loading="eager"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Dedicated 2016</CardTitle>
              <Flag className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              The 2016 dedication of Gateway Home was a tribute to our Lord God,
              the founder of the home.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Established 2019</CardTitle>
              <DoorOpen className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Serving the terminally ill with free comfort care since our
              establishment.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Community-Driven</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Powered by the dedication of donors, volunteers, and community
              partners.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <Card>
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Donors
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            Gateway Home is made possible by the generosity of our donors.
          </CardDescription>
          <div>
            <Button variant={"ghost"} asChild>
              <Link href={"/about/donors"}>Learn More</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
              {donors
                .filter((donor) => donor.level === "Platinum")
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((donor) => (
                  <Card key={donor.name} className="bg-muted/20">
                    <CardHeader className="pb-3">
                      <CardTitle>{donor.name}</CardTitle>
                      <CardDescription className="max-w-lg text-balance leading-relaxed">
                        {donor.level}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
            </div>
            <InfiniteMovingCards speed="ultra-slow">
              <div className="grid auto-cols-max grid-flow-col gap-4 md:gap-8">
                {donors
                  .filter((donor) => donor.level !== "Platinum")
                  .map((donor) => (
                    <Card key={donor.name} className="bg-muted/20">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          {donor.name}
                        </CardTitle>
                        <CardDescription className="max-w-lg text-balance leading-relaxed">
                          {donor.level}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
              </div>
            </InfiniteMovingCards>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Top-Tier Support</CardTitle>
              <Medal className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Over 100 donors contributing significantly to Gateway Home.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Community Commitment</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Donors from local businesses and families unite to sustain Gateway
              Home&apos;s mission.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Grateful Recognition</CardTitle>
              <Ribbon className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Each contribution, large or small, is vital to our ability to
              provide compassionate care.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <Card>
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Leadership
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            Our leadership team is made up of dedicated individuals who are
            passionate about providing comfort and care to those in need.
          </CardDescription>
          <div>
            <Button variant={"ghost"} asChild>
              <Link href={"/about/leadership"}>Learn More</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
              {leadership.map((leader) => (
                <Card key={leader.id} className="bg-muted/20">
                  <CardHeader>
                    <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        loading="eager"
                        className={cn(
                          "rounded-md object-cover",
                          leader.image === "/images/placeholder.svg" &&
                            "dark:brightness-[0.2] dark:grayscale",
                        )}
                      />
                    </AspectRatio>
                    <CardTitle>{leader.name}</CardTitle>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      {leader.position}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Experienced Leadership</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              A diverse team of professionals with backgrounds in business,
              healthcare, and community service.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Dedicated to Service</CardTitle>
              <HelpingHand className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Leaders who are deeply committed to supporting Gateway Home&apos;s
              residents and their families.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Community Engagement</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Actively involved in organizing fundraising events and fostering
              community connections.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <Card>
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Curious about Gateway Home?
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            Discover the answers to our most frequently asked questions.
          </CardDescription>

          <div>
            <Button variant={"ghost"} asChild>
              <Link href={"/about/fequently-asked-questions"}>Learn More</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
              <div className="md:col-span-2">
                <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                  <Image
                    src={`/images/home/fequently-asked-questions/pancake-breakfast.jpg`}
                    alt={`Pancake Breakfast at Gateway Home`}
                    fill
                    loading="eager"
                    className="h-full rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                <Image
                  src={`/images/home/fequently-asked-questions/birthday.jpg`}
                  alt={`Birthday Celebration`}
                  fill
                  loading="eager"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                <Image
                  src={`/images/home/fequently-asked-questions/concert.jpg`}
                  alt={`Concert`}
                  fill
                  loading="eager"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <div className="md:col-span-2">
                <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                  <Image
                    src={`/images/home/fequently-asked-questions/winter-fest.jpg`}
                    alt={`Winter Fest`}
                    fill
                    loading="eager"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
