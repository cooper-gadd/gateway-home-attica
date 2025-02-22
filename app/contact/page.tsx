import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  FileText,
  Instagram,
  Mail,
  MapPinHouse,
  Phone,
  Printer,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "We're always here to answer your questions and provide support.",
};

const newsletters = [
  {
    id: 1,
    title: "Newsletter",
    season: "Fall/Winter",
    year: "2024-25",
    pdfUrl: "/fall-2024-winter-2025.pdf",
  },
  {
    id: 2,
    title: "Newsletter",
    season: "Spring/Summer",
    year: "2024",
    pdfUrl: "/spring-summer-2024.pdf",
  },
  {
    id: 3,
    title: "Newsletter",
    season: "Spring",
    year: "2023",
    pdfUrl: "/spring-2023.pdf",
  },
];

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Gateway Home</h1>
        <p className="text-lg text-muted-foreground">
          We&apos;re always here to answer your questions and provide support.
          Don&apos;t hesitate to reach out to us through any of the methods
          below.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=91 Main Street, Attica, NY 14011"
              className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPinHouse className="h-5 w-5" />
              <div>
                <p className="font-medium">Address</p>
                <span className="text-sm">
                  91 Main Street, Attica, NY 14011
                </span>
              </div>
            </a>

            <a
              href="tel:585-708-4331"
              className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              <div>
                <p className="font-medium">Phone</p>
                <span className="text-sm">(585) 708-4331</span>
              </div>
            </a>

            <a
              href="mailto:info@gatewayhomeattica.org"
              className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <div>
                <p className="font-medium">Email</p>
                <span className="text-sm">info@gatewayhomeattica.org</span>
              </div>
            </a>

            <a
              href="fax:5857084333"
              className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Printer className="h-5 w-5" />
              <div>
                <p className="font-medium">Fax</p>
                <span className="text-sm">(585) 708-4333</span>
              </div>
            </a>

            <div className="pt-4 border-t">
              <p className="font-medium mb-3">Social Media</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/gatewayhomeattica/"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="text-sm">Gateway Home</span>
                </a>
                <a
                  href="https://www.instagram.com/gatewayhomeattica/"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="text-sm">gatewayhomeattica</span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Stay Connected</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Subscribe to our newsletter for updates and resources.
            </p>
            <form className="flex gap-4 mb-6">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <div className="mt-6">
              <p className="font-medium mb-4">
                Check out our recent newsletters.
              </p>
              <div className="grid gap-4">
                {newsletters.map((newsletter) => (
                  <Link
                    key={newsletter.id}
                    href={newsletter.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                  >
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-primary" />
                      <div className="flex items-center gap-1.5">
                        <span className="font-medium">{newsletter.season}</span>
                        <span className="text-sm text-muted-foreground">
                          {newsletter.year}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
