import { Images } from "../_components/images";
import { images } from "./_data/data";

export default function Post() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        7th Annual Golfing for Gateway
      </h1>
      <p className="text-sm text-muted-foreground">Sara Brunner</p>
      <p className="text-xl text-muted-foreground">
        We had a phenomenal day on the course today in our 7th Annual Golfing
        for Gateway event! Thank you to Quiet Times for hosting us, thank you to
        the planning crew, to the volunteers, to the donors and basket makers,
        and to the golfers! Gateway Home is better for knowing each of you.
      </p>
      <Images images={images} />
    </div>
  );
}
