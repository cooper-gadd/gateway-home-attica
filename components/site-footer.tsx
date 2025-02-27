import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-grid border-t">
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-balance text-sm leading-loose text-muted-foreground">
              Gateway Home - A place of comfort, care, and compassion
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=91 Main Street, Attica, NY 14011"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="h-5 w-5" />
              </a>
              <a
                href="tel:585-708-4331"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@gatewayhomeattica.org"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="fax:5857084333"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Printer className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/gatewayhomeattica/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/gatewayhomeattica/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
