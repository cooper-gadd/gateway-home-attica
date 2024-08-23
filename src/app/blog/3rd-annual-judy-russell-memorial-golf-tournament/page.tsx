import { Images } from "../_components/images";
import { images } from "./_data/data";

export default function Post() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        3rd Annual Judy Russell Memorial Golf Tournament
      </h1>
      <p className="text-sm text-muted-foreground">Sara Brunner</p>
      <p className="text-xl text-muted-foreground">
        Thanks to the Russell family for another successful Judy Russell
        Memorial golf tournament! We would also like to sincerely thank every
        golfer, sponsor, volunteer, and basket donation. Our community rocks!!
      </p>
      <Images images={images} />
    </div>
  );
}
