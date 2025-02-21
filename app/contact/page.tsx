import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    title: "Fall 2024/Winter 2025",
    pdfUrl: "/fall-2024-winter-2025.pdf",
  },
  {
    id: 2,
    title: "Spring/Summer 2024",
    pdfUrl: "/spring-summer-2024.pdf",
  },
  {
    id: 3,
    title: "Spring 2023",
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
          above or by using the contact form.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Name
                </label>
                <Input id="name" type="text" placeholder="Your Name" required />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  required
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPinHouse className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Address</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=91 Main Street, Attica, NY 14011"
                  className="text-sm text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  91 Main Street, Attica, NY 14011
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Phone</p>
                <a
                  href="tel:585-708-4331"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  (585) 708-4331
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Email</p>
                <a
                  href="mailto:info@gatewayhomeattica.org"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  info@gatewayhomeattica.org
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Printer className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Fax</p>
                <a
                  href="fax:5857084333"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  (585) 708-4333
                </a>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="font-medium mb-3">Social Media</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/gatewayhomeattica/"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="text-sm">Gateway Home</span>
                </a>
                <a
                  href="https://www.instagram.com/gatewayhomeattica/"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
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
      </div>
      <div className="mt-12">
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
            <p className="text-sm text-muted-foreground">
              Join our community to receive the latest news, event updates, and
              resources.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Recent Newsletters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                    <span className="font-medium">{newsletter.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
