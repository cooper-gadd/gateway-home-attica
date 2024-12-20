import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Contact, Mail } from "lucide-react";
import Link from "next/link";
import { socials } from "./_data/data";

export default function Page() {
  return (
    <>
      <Card id="contact-us">
        <CardHeader className="pb-3">
          <div className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-orange-400 dark:text-orange-300">
              Contact Us
            </CardTitle>
            <Contact className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
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
          <Link key={social.title} target="_blank" href={social.link}>
            <Card>
              <CardHeader className="pb-3">
                <div className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle className="text-orange-400 dark:text-orange-300">
                    {social.title}
                  </CardTitle>
                  <social.icon className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
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
            <CardTitle className="text-orange-400 dark:text-orange-300">
              Mailing List
            </CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
          </div>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Email us to subscribe to our mailing list to receive updates on our
            programs and events.
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
}
