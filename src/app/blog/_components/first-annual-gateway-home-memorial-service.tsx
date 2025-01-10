import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export function FirstAnnualGatewayHomeMemorialService() {
  return (
    <div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The first annual Gateway Home Memorial service was held on November 13,
        2024 at the 1st Baptist Church in Attica.
      </p>
      <div className="container max-w-4xl p-4 md:p-8">
        <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
          <Image
            src={`/images/blog/first-annual-gateway-home-memorial-service/events.jpeg`}
            alt={`Events`}
            fill
            className="h-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The service recognized the 77 souls that have lived and passed away
        within our walls. It was a time for the families to reconnect with the
        caregivers that assisted with their loved ones. A time to reminisce
        about their loved ones. A time to remember.
      </p>
      <div className="container max-w-4xl p-4 md:p-8">
        <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
          <Image
            src={`/images/blog/first-annual-gateway-home-memorial-service/candle.jpeg`}
            alt={`Candle`}
            fill
            className="h-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Board President Doug Domes sang a beautiful song which talked about the
        beauty of waking up in Heaven. One of the lyrics that stood out to me
        was,
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        “But just think of stepping on shore-And finding it Heaven! Of touching
        a hand-And finding it God&apos;s! Of breathing new air-And finding it
        celestial! Of waking up in glory-And finding it home!”
      </blockquote>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        What a peaceful way to think of the transition of our loved ones!
      </p>
      <div className="container max-w-4xl p-4 md:p-8">
        <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
          <Image
            src={`/images/blog/first-annual-gateway-home-memorial-service/table.jpeg`}
            alt={`Table`}
            fill
            className="h-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        A speech by Gateway Home director, Sara Brunner, reminded families to
        “come home” to Gateway when they need to feel close to their person or
        if they need support. Reminding them that once they are here, they are
        part of the family and our care for them stays even after their loved
        one has gone.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The candlelight service concluded with a lovely fellowship hour complete
        with pie made and served by Rosie Domes and the ladies of the 1st
        Baptist church.
      </p>
      <div className="container max-w-4xl p-4 md:p-8">
        <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
          <Image
            src={`/images/blog/first-annual-gateway-home-memorial-service/pie.jpeg`}
            alt={`Pie`}
            fill
            className="h-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        A yearly memorial service is planned for each November to recognize the
        folks who graced our home that year.
      </p>
      <div className="container max-w-4xl p-4 md:p-8">
        <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
          <Image
            src={`/images/blog/first-annual-gateway-home-memorial-service/walkway.jpeg`}
            alt={`Walkway`}
            fill
            className="h-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  );
}
