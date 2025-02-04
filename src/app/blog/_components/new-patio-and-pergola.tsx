import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export function NewPatioAndPergola() {
  return (
    <div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Another wonderful project for the Gateway Home done and ready for the
        resident families to enjoy spending time with loved ones on the
        decorative concrete pad and underneath the new fancy pergola. Once
        again, it was a project that just simply couldn’t have gotten done
        without the help of the community stepping up and volunteering.
      </p>
      <div className="container max-w-4xl p-4 md:p-8">
        <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
          <Image
            src={`/images/blog/new-patio-and-pergola/truck.jpg`}
            alt={`Truck`}
            fill
            className="h-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The hands-on portion of this project started Memorial Day weekend as
        Doug Domes, Todd Gadd, Greg Scholand and I began digging and prepping
        the area for concrete. Once the dirt and stone settled through time, the
        next step was to form and pour the concrete pad. That’s when we needed
        the expertise of masons. Dave Reding and brothers, Guy and Dustin
        Westermeier graciously volunteered and stepped in to pour the decorative
        concrete pad. The team nailed it by doing an absolutely amazing job that
        shows in the pictures, yet only gives justice when you see it in person.
      </p>
      <div className="container max-w-4xl p-4 md:p-8">
        <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
          <Image
            src={`/images/blog/new-patio-and-pergola/pouring.jpg`}
            alt={`Pouring`}
            fill
            className="h-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Last week was the final step to the project. With the help and carpentry
        skills of Roger Blair, Bill Hulme and Bob Rebmann, the pergola was
        finally erected. This just brought everything all together in a way that
        exceeded our expectations since planning the project many months ago.
      </p>
      <div className="container max-w-4xl p-4 md:p-8">
        <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
          <Image
            src={`/images/blog/new-patio-and-pergola/roof.jpg`}
            alt={`Roof`}
            fill
            className="h-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This project was yet another eye opener. Each volunteer did this not for
        the pat on the back or praise, but for their community and in some
        cases, in memory of loved ones of their own. It was truly an honor
        working with all of them to see this project through.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I’d like to personally thank everyone who helped make this community
        project possible from start to finish. I know the folks at the Gateway
        Home are extremely pleased with the outcome and the families who will
        use it, I’m sure will appreciate what you’ve all done to provide this to
        them.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        If any of you are looking to volunteer at the Gateway Home in any
        capacity, please feel free to reach out to see what you can do to help.
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        “It takes a village”
      </blockquote>
      <div className="container max-w-4xl p-4 md:p-8">
        <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
          <Image
            src={`/images/blog/new-patio-and-pergola/final.jpg`}
            alt={`Final`}
            fill
            className="h-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  );
}
