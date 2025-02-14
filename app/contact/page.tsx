import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Mail,
  MapPinHouse,
  Phone,
  Printer,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-8">
        Contact Gateway Home
      </h1>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-xl mb-4">
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
    </main>
  );
}
