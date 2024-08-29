import {
  Activity,
  BriefcaseBusiness,
  Calendar,
  CircleHelp,
  Contact,
  Gift,
  HandCoins,
  HandHeart,
  Home,
  Mail,
  Map,
  Newspaper,
  NotebookPen,
  Phone,
  Printer,
  Stethoscope,
  ThumbsUp,
  UserPlus,
  Users,
  type LucideProps,
} from "lucide-react";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export type PageNavItem = NavItemWithChildren;

export interface NavConfig {
  mainNav: NavItem[];
  pageNav: PageNavItem[];
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
      icon: Home,
    },
    {
      title: "Events",
      href: "/events",
      icon: Calendar,
    },
    {
      title: "Blog",
      href: "/blog",
      icon: NotebookPen,
    },
    {
      title: "Hiring",
      href: "/hiring",
      icon: BriefcaseBusiness,
    },
    {
      title: "Donate",
      href: "/donate",
      icon: HandCoins,
    },
  ],
  pageNav: [
    {
      title: "Home",
      items: [
        {
          title: "Donors",
          href: "/#donors",
          icon: Gift,
          items: [],
        },
        {
          title: "Leadership",
          href: "/#leadership",
          icon: Users,
          items: [],
        },
        {
          title: "FAQ",
          href: "/#faq",
          icon: CircleHelp,
          items: [],
        },
        {
          title: "Contact Us",
          href: "/#contact-us",
          icon: Contact,
          items: [],
        },
        {
          title: "Newsletter",
          href: "/#newsletter",
          icon: Newspaper,
          items: [],
        },
      ],
    },
    {
      title: "Events",
      items: [
        {
          title: "Chicken BBQ",
          href: "/events/chicken-bbq",
          icon: Calendar,
          items: [],
        },
        {
          title: "End of Life Doula",
          href: "/events/end-of-life-doula",
          icon: Calendar,
          items: [],
        },
        {
          title: "Meat Raffle",
          href: "/events/meat-raffle",
          icon: Calendar,
          items: [],
        },
      ],
    },
    {
      title: "Blog",
      items: [
        {
          title: "History",
          href: "/blog/history",
          icon: NotebookPen,
          items: [],
        },
        {
          title: "3rd Annual Junkyard Reunion",
          href: "/blog/3rd-annual-junkyard-reunion",
          icon: NotebookPen,
          items: [],
        },
        {
          title: "7th Annual Golfing for Gateway",
          href: "/blog/7th-annual-golfing-for-gateway",
          icon: NotebookPen,
          items: [],
        },
        {
          title: "3rd Annual Judy Russell Memorial Golf Tournament",
          href: "/blog/3rd-annual-judy-russell-memorial-golf-tournament",
          icon: NotebookPen,
          items: [],
        },
        {
          title: "Gateway Home Dedicates Brick Walkways",
          href: "/blog/gateway-home-dedicates-brick-walkways",
          icon: NotebookPen,
          items: [],
        },
        {
          title: "New Patio and Pergola",
          href: "/blog/new-patio-and-pergola",
          icon: NotebookPen,
          items: [],
        },
        {
          title: "Mission Statement",
          href: "/blog/mission-statement",
          icon: NotebookPen,
          items: [],
        },
        {
          title: "Resident Care",
          href: "/blog/resident-care",
          icon: NotebookPen,
          items: [],
        },
        {
          title: "Life at Gateway Home",
          href: "/blog/life-at-gateway-home",
          icon: NotebookPen,
          items: [],
        },
      ],
    },
    {
      title: "Hiring",
      items: [
        {
          title: "Volunteer",
          href: "/hiring/volunteer",
          icon: HandHeart,
          items: [],
        },
        {
          title: "Care Aide",
          href: "/hiring/care-aide",
          icon: Stethoscope,
          items: [],
        },
        {
          title: "RN/LPN",
          href: "/hiring/rn-lpn",
          icon: Activity,
          items: [],
        },
      ],
    },
    {
      title: "Donate",
      items: [
        {
          title: "Financial Donations",
          href: "/donate#financial-donations",
          icon: HandCoins,
          items: [],
        },
        {
          title: "Legacy Brick Sale",
          href: "/donate#legacy-brick-sale",
          icon: HandCoins,
          items: [],
        },
        {
          title: "Raffle Baskets",
          href: "/donate#raffle-baskets",
          icon: HandCoins,
          items: [],
        },
        {
          title: "Wish List",
          href: "/donate#wish-list",
          icon: HandCoins,
          items: [],
        },
      ],
    },
    {
      title: "Contact",
      items: [
        {
          title: "Phone",
          href: "tel:585-708-4331",
          icon: Phone,
          items: [],
        },
        {
          title: "Email",
          href: "mailto:info@gatewayhomeattica.org",
          icon: Mail,
          items: [],
        },
        {
          title: "Fax",
          href: "fax:5857084333",
          icon: Printer,
          items: [],
        },
        {
          title: "Address",
          href: "https://www.google.com/maps/search/?api=1&query=91 Main Street, Attica, NY 14011",
          icon: Map,
          items: [],
        },
        {
          title: "Facebook",
          href: "https://www.facebook.com/gatewayhomeattica/",
          icon: ThumbsUp,
          items: [],
        },
        {
          title: "Instagram",
          href: "https://www.instagram.com/gatewayhomeattica/",
          icon: UserPlus,
          items: [],
        },
      ],
    },
  ],
};
