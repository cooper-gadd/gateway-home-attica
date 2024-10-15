import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { hirings } from "./_data/data";
import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";

export default function Hiring() {
  return (
    <>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-orange-400 dark:text-orange-300">
              We&apos;re Hiring
            </CardTitle>
            <BriefcaseBusiness className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
          </div>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Contact us if you have any questions.
          </CardDescription>
        </CardHeader>
      </Card>
      {hirings.map((hiring) => (
        <Card key={hiring.id}>
          <CardHeader>
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-orange-400 dark:text-orange-300">
                {hiring.title}
              </CardTitle>
              <hiring.icon className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
            </div>
            <CardDescription>Attica, NY</CardDescription>
          </CardHeader>
          <CardContent>{hiring.aboutYou}</CardContent>
          <CardFooter>
            <Button variant={"secondary"} asChild>
              <Link href={`/hiring/${hiring.id}`}>Read More</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
