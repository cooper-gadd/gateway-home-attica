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

export default function Hiring() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>We&apos;re Hiring</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Contact us if you have any questions.
          </CardDescription>
        </CardHeader>
      </Card>
      {hirings.map((hiring) => (
        <Card key={hiring.id}>
          <CardHeader>
            <CardTitle>{hiring.role}</CardTitle>
            <CardDescription>{hiring.location}</CardDescription>
          </CardHeader>
          <CardContent>{hiring.aboutYou}</CardContent>
          <CardFooter>
            <Button asChild>
              <Link href={`/hiring/${hiring.id}`}>Read More</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
