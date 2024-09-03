import {
  Activity,
  Beef,
  BookOpen,
  BrickWall,
  BriefcaseBusiness,
  Calendar,
  CircleHelp,
  Contact,
  Cuboid,
  Drumstick,
  Gift,
  Hammer,
  HandCoins,
  HandHeart,
  Heart,
  Home,
  Mail,
  Map,
  Newspaper,
  NotebookPen,
  Phone,
  Printer,
  ScrollText,
  Smile,
  Stethoscope,
  Target,
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
    {
      title: "Contact",
      href: "/contact",
      icon: Contact,
    },
  ],
  pageNav: [
    {
      title: "About",
      items: [
        {
          title: "Mission Statement",
          href: "/about/mission-statement",
          icon: Target,
          items: [],
        },
        {
          title: "Resident Care",
          href: "/about/resident-care",
          icon: Heart,
          items: [],
        },
        {
          title: "Life at Gateway Home",
          href: "/about/life-at-gateway-home",
          icon: Smile,
          items: [],
        },
        {
          title: "Our History",
          href: "/about/our-history",
          icon: BookOpen,
          items: [],
        },
        {
          title: "Donors",
          href: "/about/donors",
          icon: HandCoins,
          items: [],
        },
        {
          title: "Leadership",
          href: "/about/leadership",
          icon: Users,
          items: [],
        },
        {
          title: "Frequently Asked Questions",
          href: "/about/fequently-asked-questions",
          icon: CircleHelp,
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
          icon: Drumstick,
          items: [],
        },
        {
          title: "End of Life Doula",
          href: "/events/end-of-life-doula",
          icon: Stethoscope,
          items: [],
        },
        {
          title: "Meat Raffle",
          href: "/events/meat-raffle",
          icon: Beef,
          items: [],
        },
      ],
    },
    {
      title: "Blog",
      items: [
        {
          title: "Gateway Home Dedicates Brick Walkways",
          href: "/blog/gateway-home-dedicates-brick-walkways",
          icon: BrickWall,
          items: [],
        },
        {
          title: "Spring/Summer 2024 Newsletter",
          href: "/pdfs/spring-summer-2024-newletter.pdf",
          icon: Newspaper,
          items: [],
        },
        {
          title: "New Patio and Pergola",
          href: "/blog/new-patio-and-pergola",
          icon: Hammer,
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
          icon: Cuboid,
          items: [],
        },
        {
          title: "Raffle Baskets",
          href: "/donate#raffle-baskets",
          icon: Gift,
          items: [],
        },
        {
          title: "Wish List",
          href: "/donate#wish-list",
          icon: ScrollText,
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
