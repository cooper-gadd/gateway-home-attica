import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import { socials } from "./_data/data";

export default function Contact() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Contact Us</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Open 24 hours
          </CardDescription>
        </CardHeader>
        <CardContent>
          We are always here to help you. If you have any questions or need
          help, feel free to contact us.
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {socials.map((social) => (
          <Card key={social.id}>
            <CardHeader className="pb-3">
              <CardTitle>{social.title}</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                {social.description}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link target="_blank" href={social.link}>
                  {<social.icon className="mr-2 h-4 w-4" />}
                  {social.action}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
