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
  Clock,
  Coins,
  DoorOpen,
  HandHeart,
  HeartHandshake,
  HomeIcon,
  RotateCw,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { donors, leadership } from "./_data/data";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card id="mission-statement">
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
              <Link href={"/blog/mission-statement"}>Learn More</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="container">
            <AspectRatio ratio={16 / 9} className="rounded-md bg-muted">
              <Image
                src={`/images/home/gateway-home.jpg`}
                alt={`Gateway Home`}
                fill
                loading="eager"
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Compassionate End-of-Life Care</CardTitle>
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
      <Card id="resident-care">
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
              <Link href={"/blog/resident-care"}>Learn More</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="container">
            <AspectRatio ratio={16 / 9} className="rounded-md bg-muted">
              <iframe
                src="https://www.youtube-nocookie.com/embed/YG2s_j0Kh0o?si=5ijMK22xhPHMV1mh"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="h-full w-full rounded-md object-cover"
              ></iframe>
            </AspectRatio>
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
      <Card id="life-at-gateway">
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
              <Link href={"/blog/life-at-gateway-home"}>Lean More</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="container">
            <AspectRatio ratio={16 / 9} className="rounded-md bg-muted">
              <Image
                src={`/images/home/life-at-gateway-home.jpeg`}
                alt={`Life at Gateway Home`}
                fill
                loading="eager"
                className="rounded-md object-cover"
              />
            </AspectRatio>
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
      <Card id="history">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Our History
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            Learn about the founding of Gateway Home and our mission to provide
            compassionate end-of-life care.
          </CardDescription>
          <div>
            <Button variant={"ghost"} asChild>
              <Link href={"/blog/history"}>Lean More</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="container">
            <AspectRatio ratio={16 / 9} className="rounded-md bg-muted">
              <Image
                src={`/images/home/history.jpeg`}
                alt={`history`}
                fill
                loading="eager"
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Opened 2019</CardTitle>
              <DoorOpen className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Serving the terminally ill with free comfort care since our
              opening.
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
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Ongoing Mission</CardTitle>
              <RotateCw className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Continuing our mission to provide compassionate care for years to
              come.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <Card id="donors">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Donors
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            Gateway Home is made possible by the generosity of our donors.
          </CardDescription>
          <div>
            <Button variant={"ghost"} asChild>
              <Link href={"/blog/donors"}>Learn More</Link>
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
      <Card id="leadership">
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
              <Link href={"/blog/leadership"}>Learn More</Link>
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
    </div>
  );
}
