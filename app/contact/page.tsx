import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">
        Contact Gateway Home
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
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
          <CardContent>
            <p className="mb-2">
              <strong>Address:</strong> 91 Main Street, Attica, NY 14011
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> (585) 708-4331
            </p>
            <p className="mb-4">
              <strong>Email:</strong> info@Gatewayhouse.com
            </p>
            <p className="mb-4">
              We&apos;re always here to answer your questions and provide
              support. Don&apos;t hesitate to reach out to us through any of the
              methods above or by using the contact form.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}
