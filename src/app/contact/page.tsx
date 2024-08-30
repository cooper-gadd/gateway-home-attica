import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Contact, Mail, Newspaper } from "lucide-react";
import Link from "next/link";
import { socials } from "./_data/data";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card id="contact-us">
        <CardHeader className="pb-3">
          <div className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>Contact Us</CardTitle>
            <Contact className="h-4 w-4 text-muted-foreground" />
          </div>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            If you have any questions or would like to learn more about Gateway
            Home, please contact us. We are here to help you.
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        {socials.map((social) => (
          <Link key={social.id} target="_blank" href={social.link}>
            <Card>
              <CardHeader className="pb-3">
                <div className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>{social.title}</CardTitle>
                  <social.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  {social.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
      <Card id="newsletter">
        <CardHeader className="pb-3">
          <div className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>Newsletter</CardTitle>
            <Newspaper className="h-4 w-4 text-muted-foreground" />
          </div>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Email us to subscribe to our newsletter to receive updates on our
            services and events.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-4">
          <Button asChild>
            <Link target="_blank" href={"/pdfs/newsletter.pdf"}>
              <Newspaper className="mr-2 h-4 w-4" />
              Read Latest
            </Link>
          </Button>
          <Button asChild>
            <Link target="_blank" href={"mailto:info@gatewayhomeattica.org"}>
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
