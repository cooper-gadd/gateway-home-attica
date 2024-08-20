import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>3rd Annual Junkyard Reunion</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            By Sara Brunner
          </CardDescription>
        </CardHeader>
        <CardContent>
          The Junkyard Reunion was an absolute HOOT! A wonderful success put on
          by some awesome folks. Thank you to Angela and Steve Zymowski who did
          the legwork on this and managed a fabulous event. Thank you to the
          Folsom Trailblazers, Vintage Cow, and Beer Justice Brewing for the
          incredible food! Thank you to Ken Barrett Chevrolet and ProX Window
          and Door for their generous sponsorship. All of our beautiful basket
          donors! Lastly, all of you who attended, brought cars, tried for
          baskets, and ate some phenomenal food! We couldn’t do what we do
          without each of you!
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>7th Annual Golfing for Gateway</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            By Sara Brunner
          </CardDescription>
        </CardHeader>
        <CardContent>
          We had a phenomenal day on the course today in our 7th Annual Golfing
          for Gateway event! Thank you to Quiet Times for hosting us, thank you
          to the planning crew, to the volunteers, to the donors and basket
          makers, and to the golfers! Gateway Home is better for knowing each of
          you.
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>
            3rd Annual Judy Russell Memorial Golf Tournament
          </CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            By Sara Brunner
          </CardDescription>
        </CardHeader>
        <CardContent>
          Thanks to the Russell family for another successful Judy Russell
          Memorial golf tournament! We would also like to sincerely thank every
          golfer, sponsor, volunteer, and basket donation. Our community rocks!!
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Gateway Home Dedicates Brick Walkways</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            By Brain Quinn
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            ATTICA — Brick by brick, those who wanted to honor the memory of a
            Gateway Home resident contributed to walkways at the comfort care
            facility. They were able to see the results when the walkways were
            dedicated recently.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Gateway Director Sara Brunner said the brick walkways part of the
            project took about a year. Gateway, 91 Main St., is a home for the
            terminally ill offering free comfort care for those in their last
            three months of a terminal illness.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            “We collected brick orders and printed bricks,” she said. “There’s
            the back walkway and the front walkway. They have a checkered
            pattern.”
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Each brick, Brunner said, is a representation of love and memories
            from everyone at the dedication.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            “Piece by piece, the road to Gateway is truly paved with the beloved
            remembrances of those who have gone before us. In this way, you have
            chosen to have their name and their legacy remembered. You have also
            supported this mission to move forward and make a lasting
            contribution to others whom we have yet to meet,” she said. “Walking
            in every morning brings a smile to my face to think of these
            beautiful souls that we have cared for and the lovely supporters who
            think that what we’re doing here is worth investing in.”
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Brunner invited those who had bought bricks for the walkways to come
            to Gateway Home when they need to feel close to the loved ones in
            whose memory they bought them.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            “Sit in the garden so exquisitely done by Rosie Domes. It truly is a
            place of peace,” Brunner said, talking about the effort by Domes, a
            volunteer.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Brunner told family members of former residents that Gateway thinks
            of them often and wonders how they’re doing these days.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            “Today, we dedicate this memorial and we are not simply erecting a
            monument or a walkway made of stone, but we’re creating a lasting
            testament to people’s enduring impact,” she said. “This memorial
            will serve as a reminder of their contributions and as a symbol of
            the values they held dear. We appreciate each and every one of you.
            Without every person in this audience, what we do here and the
            impact that we make would not be possible.”
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Gateway President Doug Domes said the East Hill Foundation has been
            good to Gateway Home in terms of giving funds, for the brick
            walkways and also for improvements made at Gateway. He said when
            East Hill Vice President Warren Greatbatch came to see the home, it
            was an honor to have him.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            “The East Hill Foundation has helped us with, right in the
            beginning, with some of the demolition that took place, helped us
            with our kitchen, our shower facilities, roof repair, porch, pergola
            and our brick and walkway,” he said.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Gateway received more than $121,000 in grant funds, through East
            Hill, for the improvements, he said.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Brunner said, “Eventually, we’re going to have to be at the end of
            our journey here. To know that there is something in this community
            and a whole group of beautiful people waiting to help you makes that
            thought just a little bit easier. Once you have been here you know
            that you’re our family. We are honored to be here today to present
            to you this memorial brick walkway.”
          </p>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Carousel className="w-3/4 max-w-lg lg:w-full">
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/images/blog/gateway-home-dedicates-brick-walkways/doug-speaking.jpg"
                  width={500}
                  height={100}
                  alt="Doug Speaking"
                  className="rounded-lg"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/images/blog/gateway-home-dedicates-brick-walkways/sara-speaking.jpg"
                  width={500}
                  height={100}
                  alt="Sara Speaking"
                  className="rounded-lg"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/images/blog/gateway-home-dedicates-brick-walkways/doug-sara.jpg"
                  width={500}
                  height={100}
                  alt="Doug and Sara"
                  className="rounded-lg"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/images/blog/gateway-home-dedicates-brick-walkways/doug-donna.jpg"
                  width={500}
                  height={100}
                  alt="Doug and Donna"
                  className="rounded-lg"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/images/blog/gateway-home-dedicates-brick-walkways/sara.jpg"
                  width={500}
                  height={100}
                  alt="Sara"
                  className="rounded-lg"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/images/blog/gateway-home-dedicates-brick-walkways/sue.jpg"
                  width={500}
                  height={100}
                  alt="Sue"
                  className="rounded-lg"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardFooter>
      </Card>
    </div>
  );
}
