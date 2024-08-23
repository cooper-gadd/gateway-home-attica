import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { hirings } from "@/data/data";
import { Clock, User, Users } from "lucide-react";

export const dynamic = "force-dynamic";

export default function Posting({
  params: { id: hiringId },
}: {
  params: { id: string };
}) {
  const hiring = hirings.find((hiring) => hiring.id === Number(hiringId))!;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>{hiring.role}</CardTitle>
          <CardDescription className="flex max-w-lg flex-col items-start gap-2 text-balance leading-relaxed md:flex-row md:items-center md:gap-4">
            <span className="flex items-center">
              <Users className="mr-1 h-4 w-4" /> {hiring.department}
            </span>
            <span className="flex items-center">
              <User className="mr-1 h-4 w-4" /> {hiring.locationType}
            </span>
            <span className="flex items-center">
              <Clock className="mr-1 h-4 w-4" /> {hiring.type}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-4 md:gap-8">
          <Card className="bg-muted/20">
            <CardHeader className="pb-3">
              <CardTitle>About Gateway Home:</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Gateway Home is established to give comfort care to people who
                are medically determined to be in their last stages of life
                (three months or less). Our organization will provide both
                medical and spiritual care to support the residents as they pass
                from this life to the next. Gateway Home staff and volunteers
                are committed to provide dignified care, comfort, and support
                for our residents and their families. Gateway Home is a
                nonprofit organization, and does not charge for services
                provided. Funding is accomplished through donations, bequests,
                and community support. Admission is based solely on need.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-muted/20">
            <CardHeader className="pb-3">
              <CardTitle>About the role:</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                {hiring.aboutTheRole}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-muted/20">
            <CardHeader className="pb-3">
              <CardTitle>What you will do:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                {hiring.whatYouWillDo.map((paragraph, index) => (
                  <li key={index}>{paragraph}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-muted/20">
            <CardHeader className="pb-3">
              <CardTitle>About you:</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                {hiring.aboutYou}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-muted/20">
            <CardHeader className="pb-3">
              <CardTitle>Bonus if you have:</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                {hiring.bonusIfYouHave}
              </p>
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter>
          <Button>Apply Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
