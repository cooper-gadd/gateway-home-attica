import { SubscribeForm } from "@/components/subscribe-form";
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
  description: "We're always here to answer your questions and provide support.",
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
    <main>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Contact Gateway Home</h1>
                <p className="text-lg text-muted-foreground">
                  We&apos;re always here to answer your questions and provide
                  support. Don&apos;t hesitate to reach out to us through any of
                  the methods below.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=91 Main Street, Attica, NY 14011"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPinHouse className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <span className="text-lg">
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
                      <span className="text-lg">(585) 708-4331</span>
                    </div>
                  </a>

                  <a
                    href="mailto:info@gatewayhomeattica.org"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <span className="text-lg">
                        info@gatewayhomeattica.org
                      </span>
                    </div>
                  </a>

                  <a
                    href="fax:5857084333"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Printer className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Fax</p>
                      <span className="text-lg">(585) 708-4333</span>
                    </div>
                  </a>

                  <div className="pt-6 border-t">
                    <p className="font-medium mb-4">Social Media</p>
                    <div className="flex space-x-6">
                      <a
                        href="https://www.facebook.com/gatewayhomeattica/"
                        className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="h-6 w-6" />
                        <span className="text-lg">Gateway Home</span>
                      </a>
                      <a
                        href="https://www.instagram.com/gatewayhomeattica/"
                        className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="h-6 w-6" />
                        <span className="text-lg">gatewayhomeattica</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold mb-6">Stay Connected</h2>
                <p className="text-lg mb-8">
                  Subscribe to our newsletter for updates and resources.
                </p>
                <SubscribeForm />
                <div className="mt-12">
                  <p className="font-medium mb-6 text-xl">
                    Check out our recent newsletters
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
                          <FileText className="h-5 w-5 mr-3 text-primary" />
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-lg">
                              {newsletter.season}
                            </span>
                            <span className="text-muted-foreground">
                              {newsletter.year}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
