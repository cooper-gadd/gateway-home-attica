import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { DonorsChart } from "./_components/donors-chart";
import { stats } from "./_data/data";

export default function Home() {
  return (
    <>
      <Card className="border-none bg-transparent shadow-none">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-400 dark:text-orange-300 lg:text-5xl">
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
        <CardContent className="flex items-center justify-center lg:container">
          <Image
            src={`/images/home/gateway-home/front.jpg`}
            alt={`Front of Gateway Home`}
            width={2000}
            height={1000}
            className="rounded-md"
          />
        </CardContent>
        <CardFooter>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
            {stats
              .filter((stat) => stat.category === "mission-statement")
              .map((stat, index) => (
                <Card
                  key={index}
                  className="border-none bg-transparent shadow-none"
                >
                  <CardHeader className="pb-3">
                    <div className="flex flex-row items-center justify-between space-y-0">
                      <CardTitle>{stat.title}</CardTitle>
                      <stat.icon className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
                    </div>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      {stat.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
          </div>
        </CardFooter>
      </Card>
      <Card className="border-none bg-transparent shadow-none">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-400 dark:text-orange-300 lg:text-5xl">
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
        <CardContent className="flex items-center justify-center lg:container">
          <video
            width="2000"
            height="1000"
            controls
            preload="metadata"
            loop
            muted
            playsInline
            className="rounded-md"
          >
            <source src="/videos/promo.mp4" type="video/mp4" />
            <track
              src="/captions/promo.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          </video>
        </CardContent>
        <CardFooter>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
            {stats
              .filter((stat) => stat.category === "resident-care")
              .map((stat, index) => (
                <Card
                  key={index}
                  className="border-none bg-transparent shadow-none"
                >
                  <CardHeader className="pb-3">
                    <div className="flex flex-row items-center justify-between space-y-0">
                      <CardTitle>{stat.title}</CardTitle>
                      <stat.icon className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
                    </div>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      {stat.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
          </div>
        </CardFooter>
      </Card>
      <Card className="border-none bg-transparent shadow-none">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-400 dark:text-orange-300 lg:text-5xl">
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
        <CardContent className="flex items-center justify-center lg:container">
          <Image
            src={`/images/home/life-at-gateway-home/resident-room.jpg`}
            alt={`Resident Room at Gateway Home`}
            width={2000}
            height={1000}
            className="rounded-md"
          />
        </CardContent>
        <CardFooter>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
            {stats
              .filter((stat) => stat.category === "life-at-gateway-home")
              .map((stat, index) => (
                <Card
                  key={index}
                  className="border-none bg-transparent shadow-none"
                >
                  <CardHeader className="pb-3">
                    <div className="flex flex-row items-center justify-between space-y-0">
                      <CardTitle>{stat.title}</CardTitle>
                      <stat.icon className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
                    </div>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      {stat.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
          </div>
        </CardFooter>
      </Card>
      <Card className="border-none bg-transparent shadow-none">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-400 dark:text-orange-300 lg:text-5xl">
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
            <DonorsChart />
          </div>
        </CardContent>
        <CardFooter>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
            {stats
              .filter((stat) => stat.category === "donors")
              .map((stat, index) => (
                <Card
                  key={index}
                  className="border-none bg-transparent shadow-none"
                >
                  <CardHeader className="pb-3">
                    <div className="flex flex-row items-center justify-between space-y-0">
                      <CardTitle>{stat.title}</CardTitle>
                      <stat.icon className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
                    </div>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      {stat.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
          </div>
        </CardFooter>
      </Card>
      <Card className="border-none bg-transparent shadow-none">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-400 dark:text-orange-300 lg:text-5xl">
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
        <CardContent className="flex items-center justify-center lg:container">
          <Image
            src={`/images/home/fequently-asked-questions/pancake-breakfast.jpg`}
            alt={`Front of Gateway Home`}
            width={2000}
            height={1000}
            className="rounded-md"
          />
        </CardContent>
      </Card>
    </>
  );
}
