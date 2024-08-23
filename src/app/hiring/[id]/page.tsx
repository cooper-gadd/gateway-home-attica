import { Button } from "@/components/ui/button";
import { hirings } from "../_data/data";
import { Clock, User, Users } from "lucide-react";

export const dynamic = "force-dynamic";

export default function Posting({
  params: { id: hiringId },
}: {
  params: { id: string };
}) {
  const hiring = hirings.find((hiring) => hiring.id === hiringId)!;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {hiring.role}
      </h1>
      <div className="flex max-w-lg flex-col items-start gap-2 text-balance leading-relaxed md:flex-row md:items-center md:gap-4">
        <span className="flex items-center">
          <Users className="mr-1 h-4 w-4" /> {hiring.department}
        </span>
        <span className="flex items-center">
          <User className="mr-1 h-4 w-4" /> {hiring.locationType}
        </span>
        <span className="flex items-center">
          <Clock className="mr-1 h-4 w-4" /> {hiring.type}
        </span>
      </div>
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          About Gateway Home:
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Gateway Home is established to give comfort care to people who are
          medically determined to be in their last stages of life (three months
          or less). Our organization will provide both medical and spiritual
          care to support the residents as they pass from this life to the next.
          Gateway Home staff and volunteers are committed to provide dignified
          care, comfort, and support for our residents and their families.
          Gateway Home is a nonprofit organization, and does not charge for
          services provided. Funding is accomplished through donations,
          bequests, and community support. Admission is based solely on need.
        </p>
      </div>
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          About the role:
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {hiring.aboutTheRole}
        </p>
      </div>
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          What you will do:
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {hiring.whatYouWillDo.map((paragraph, index) => (
            <li key={index}>{paragraph}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          About you:
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {hiring.aboutYou}
        </p>
      </div>
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Bonus if you have:
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {hiring.bonusIfYouHave}
        </p>
      </div>
      <div>
        <Button>Apply Now</Button>
      </div>
    </div>
  );
}
