import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Mail, Map, Phone, Printer, ThumbsUp, UserPlus } from "lucide-react";
import Link from "next/link";

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
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Phone</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              585-708-4331
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href={"tel:585-708-4331"}>
                <Phone className="mr-2 h-4 w-4" />
                Call us
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Email</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              info@gatewayhomeattica.org
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href={"mailto:info@gatewayhomeattica.org"}>
                <Mail className="mr-2 h-4 w-4" />
                Email us
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Fax</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              585-708-4333
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href={"fax:5857084333"}>
                <Printer className="mr-2 h-4 w-4" />
                Fax us
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Address</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              91 Main Street, Attica, NY 14011
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link
                target="_blank"
                href={
                  "https://www.google.com/maps/search/?api=1&query=91 Main Street, Attica, NY 14011"
                }
              >
                <Map className="mr-2 h-4 w-4" />
                Find us
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Facebook</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Gateway Home
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link
                target="_blank"
                href={"https://www.facebook.com/gatewayhomeattica/"}
              >
                <ThumbsUp className="mr-2 h-4 w-4" />
                Like us
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Instagram</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              gatewayhomeattica
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link
                target="_blank"
                href={"https://www.instagram.com/gatewayhomeattica/"}
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Follow us
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
