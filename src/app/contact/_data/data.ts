import { Mail, Map, Phone, Printer, ThumbsUp, UserPlus } from "lucide-react";

export const socials = [
  {
    id: 1,
    title: "Phone",
    description: "585-708-4331",
    link: "tel:585-708-4331",
    icon: Phone,
    action: "Call Us",
  },
  {
    id: 2,
    title: "Email",
    description: "info@gatewayhomeattica.org",
    link: "mailto:info@gatewayhomeattica.org",
    icon: Mail,
    action: "Email Us",
  },
  {
    id: 3,
    title: "Fax",
    description: "585-708-4333",
    link: "fax:5857084333",
    icon: Printer,
    action: "Fax Us",
  },
  {
    id: 4,
    title: "Address",
    description: " 91 Main Street, Attica, NY 14011",
    link: "https://www.google.com/maps/search/?api=1&query=91 Main Street, Attica, NY 14011",
    icon: Map,
    action: "Find Us",
  },
  {
    id: 5,
    title: "Facebook",
    description: "Gateway Home",
    link: "https://www.facebook.com/gatewayhomeattica/",
    icon: ThumbsUp,
    action: "Like Us",
  },
  {
    id: 6,
    title: "Instagram",
    description: "gatewayhomeattica",
    link: "https://www.instagram.com/gatewayhomeattica/",
    icon: UserPlus,
    action: "Follow Us",
  },
];
