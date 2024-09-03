import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export function GatewayHomeDedicatesBrickWalkways() {
  return (
    <div>
      <p className="text-xl text-muted-foreground">
        Brick by brick, those who wanted to honor the memory of a Gateway Home
        resident contributed to walkways at the comfort care facility. They were
        able to see the results when the walkways were dedicated recently.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Gateway Director Sara Brunner said the brick walkways part of the
        project took about a year. Gateway, 91 Main St., is a home for the
        terminally ill offering free comfort care for those in their last three
        months of a terminal illness.
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        “We collected brick orders and printed bricks,” she said. “There’s the
        back walkway and the front walkway. They have a checkered pattern.”
      </blockquote>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Each brick, Brunner said, is a representation of love and memories from
        everyone at the dedication.
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        “Piece by piece, the road to Gateway is truly paved with the beloved
        remembrances of those who have gone before us. In this way, you have
        chosen to have their name and their legacy remembered. You have also
        supported this mission to move forward and make a lasting contribution
        to others whom we have yet to meet,” she said. “Walking in every morning
        brings a smile to my face to think of these beautiful souls that we have
        cared for and the lovely supporters who think that what we’re doing here
        is worth investing in.”
      </blockquote>
      <div className="container max-w-4xl p-4 md:p-8">
        <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
          <Image
            src={`/images/blog/gateway-home-dedicates-brick-walkways/sara.jpg`}
            alt={`Sara Brunner`}
            fill
            loading="eager"
            className="h-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Brunner invited those who had bought bricks for the walkways to come to
        Gateway Home when they need to feel close to the loved ones in whose
        memory they bought them.
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        “Sit in the garden so exquisitely done by Rosie Domes. It truly is a
        place of peace,” Brunner said, talking about the effort by Domes, a
        volunteer.
      </blockquote>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Brunner told family members of former residents that Gateway thinks of
        them often and wonders how they’re doing these days.
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        “Today, we dedicate this memorial and we are not simply erecting a
        monument or a walkway made of stone, but we’re creating a lasting
        testament to people’s enduring impact,” she said. “This memorial will
        serve as a reminder of their contributions and as a symbol of the values
        they held dear. We appreciate each and every one of you. Without every
        person in this audience, what we do here and the impact that we make
        would not be possible.”
      </blockquote>
      <div className="container max-w-4xl p-4 md:p-8">
        <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
          <Image
            src={`/images/blog/gateway-home-dedicates-brick-walkways/sara-speaking.jpg`}
            alt={`Sara Speaking`}
            fill
            loading="eager"
            className="h-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Gateway President Doug Domes said the East Hill Foundation has been good
        to Gateway Home in terms of giving funds, for the brick walkways and
        also for improvements made at Gateway. He said when East Hill Vice
        President Warren Greatbatch came to see the home, it was an honor to
        have him.
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        “The East Hill Foundation has helped us with, right in the beginning,
        with some of the demolition that took place, helped us with our kitchen,
        our shower facilities, roof repair, porch, pergola and our brick and
        walkway,” he said.
      </blockquote>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Gateway received more than $121,000 in grant funds, through East Hill,
        for the improvements, he said.
      </p>
      <div className="container max-w-4xl p-4 md:p-8">
        <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
          <Image
            src={`/images/blog/gateway-home-dedicates-brick-walkways/doug-speaking.jpg`}
            alt={`Doug Speaking`}
            fill
            loading="eager"
            className="h-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        Brunner said, “Eventually, we’re going to have to be at the end of our
        journey here. To know that there is something in this community and a
        whole group of beautiful people waiting to help you makes that thought
        just a little bit easier. Once you have been here you know that you’re
        our family. We are honored to be here today to present to you this
        memorial brick walkway.”
      </blockquote>
      <div className="container max-w-4xl p-4 md:p-8">
        <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
          <Image
            src={`/images/blog/gateway-home-dedicates-brick-walkways/doug-sara.jpg`}
            alt={`Doug and Sara`}
            fill
            loading="eager"
            className="h-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  );
}
