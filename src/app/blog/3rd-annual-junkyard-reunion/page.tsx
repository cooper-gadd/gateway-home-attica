import { Images } from "../_components/images";
import { images } from "./_data/data";

export default function Post() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        3rd Annual Junkyard Reunion
      </h1>
      <p className="text-sm text-muted-foreground">Sara Brunner</p>
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The Junkyard Reunion was an absolute HOOT! A wonderful success put on
          by some awesome folks. Thank you to Angela and Steve Zymowski who did
          the legwork on this and managed a fabulous event. Thank you to the
          Folsom Trailblazers, Vintage Cow, and Beer Justice Brewing for the
          incredible food! Thank you to Ken Barrett Chevrolet and ProX Window
          and Door for their generous sponsorship. All of our beautiful basket
          donors! Lastly, all of you who attended, brought cars, tried for
          baskets, and ate some phenomenal food! We couldn’t do what we do
          without each of you!
        </p>
      </div>
      <Images images={images} />
    </div>
  );
}
