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
import Image from "next/image";
import Link from "next/link";
import { donors, leadership, stats } from "./_data/data";

export default function Home() {
  return (
    <>
      <Card className="border-none bg-transparent">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-300 lg:text-5xl">
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
          <div className="lg:container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
              <div className="md:col-span-2">
                <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                  <Image
                    src={`/images/home/gateway-home/front.jpg`}
                    alt={`Front of Gateway Home`}
                    fill
                    className="h-full rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                <Image
                  src={`/images/home/gateway-home/dedication-brick.jpg`}
                  alt={`Dedication of Gateway Home`}
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                <Image
                  src={`/images/home/gateway-home/established-brick.jpg`}
                  alt={`Established Brick at Gateway Home`}
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <div className="md:col-span-2">
                <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                  <Image
                    src={`/images/home/gateway-home/back.jpg`}
                    alt={`Back of Gateway Home`}
                    fill
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border-none bg-transparent">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-300 lg:text-5xl">
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
          <div className="lg:container">
            <video
              width="2000"
              controls
              preload="none"
              loop
              muted
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
      <Card className="border-none bg-transparent">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-300 lg:text-5xl">
            Life at Gateway Home
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            Creating a welcoming environment where residents receive
            personalized, compassionate care.
          </CardDescription>
          <div>
            <Button variant={"ghost"} asChild>
              <Link href={"/about/life-at-gateway-home"}>Learn More</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="lg:container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
              <div className="md:col-span-2">
                <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                  <Image
                    src={`/images/home/life-at-gateway-home/resident-room.jpg`}
                    alt={`Resident Room at Gateway Home`}
                    fill
                    className="h-full rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                <Image
                  src={`/images/home/life-at-gateway-home/kitchen.jpg`}
                  alt={`Kitchen at Gateway Home`}
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                <Image
                  src={`/images/home/life-at-gateway-home/hallway.jpg`}
                  alt={`Hallway at Gateway Home`}
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <div className="md:col-span-2">
                <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                  <Image
                    src={`/images/home/life-at-gateway-home/living-room.jpg`}
                    alt={`Living Room at Gateway Home`}
                    fill
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border-none bg-transparent">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-300 lg:text-5xl">
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
          <div className="lg:container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
              {donors
                .filter((donor) => donor.level === "Platinum")
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((donor) => (
                  <Card
                    key={donor.name}
                    className="border-gray-300 bg-muted/20"
                  >
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
                    <Card
                      key={donor.name}
                      className={cn(
                        "bg-muted/20",
                        donor.level === "Gold"
                          ? "border-yellow-400"
                          : donor.level === "Silver"
                            ? "border-gray-400"
                            : donor.level === "Bronze"
                              ? "border-amber-700"
                              : "border-",
                      )}
                    >
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
      <Card className="border-none bg-transparent">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-300 lg:text-5xl">
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
          <div className="lg:container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
              {leadership.map((leader) => (
                <Card key={leader.id} className="border-hidden">
                  <CardHeader>
                    <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
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
      <Card className="border-none bg-transparent">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-300 lg:text-5xl">
            Our Compassionate Approach
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            At Gateway Home, we embrace a holistic philosophy of care, providing
            dignity, comfort, and support to our residents and their families
            during life&apos;s final journey.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="container">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="">
                  <CardHeader className="pb-3">
                    <div className="flex flex-row items-center justify-between space-y-0">
                      <CardTitle>{stat.title}</CardTitle>
                      <stat.icon className="h-4 w-4 text-muted-foreground text-teal-300" />
                    </div>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      {stat.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border-none bg-transparent">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-300 lg:text-5xl">
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
          <div className="lg:container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
              <div className="md:col-span-2">
                <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                  <Image
                    src={`/images/home/fequently-asked-questions/pancake-breakfast.jpg`}
                    alt={`Pancake Breakfast at Gateway Home`}
                    fill
                    className="h-full rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                <Image
                  src={`/images/home/fequently-asked-questions/birthday.jpg`}
                  alt={`Birthday Celebration`}
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                <Image
                  src={`/images/home/fequently-asked-questions/concert.jpg`}
                  alt={`Concert`}
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <div className="md:col-span-2">
                <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                  <Image
                    src={`/images/home/fequently-asked-questions/winter-fest.jpg`}
                    alt={`Winter Fest`}
                    fill
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
