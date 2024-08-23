import { type LucideProps } from "lucide-react";
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
    },
    {
      title: "Events",
      href: "/events",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Hiring",
      href: "/hiring",
    },
    {
      title: "Donate",
      href: "/donate",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  pageNav: [
    {
      title: "Home",
      items: [
        {
          title: "Mission Statement",
          href: "/",
          items: [],
        },
        {
          title: "Resident Care",
          href: "/",
          items: [],
        },
        {
          title: "Donors",
          href: "/",
          items: [],
        },
        {
          title: "Leadership",
          href: "/",
          items: [],
        },
        {
          title: "FAQ",
          href: "/",
          items: [],
        },
      ],
    },
    {
      title: "Events",
      items: [
        {
          title: "Chicken BBQ",
          href: "/events/1",
          items: [],
        },
        {
          title: "End of Life Doula",
          href: "/events/2",
          items: [],
        },
        {
          title: "Meat Raffle",
          href: "/events/3",
          items: [],
        },
      ],
    },
    {
      title: "Blog",
      items: [
        {
          title: "3rd Annual Junkyard Reunion",
          href: "/blog/3rd-annual-junkyard-reunion",
          items: [],
        },
        {
          title: "7th Annual Golfing for Gateway",
          href: "/blog/7th-annual-golfing-for-gateway",
          items: [],
        },
        {
          title: "3rd Annual Judy Russell Memorial Golf Tournament",
          href: "/blog/3rd-annual-judy-russell-memorial-golf-tournament",
          items: [],
        },
        {
          title: "Gateway Home Dedicates Brick Walkways",
          href: "/blog/gateway-home-dedicates-brick-walkways",
          items: [],
        },
        {
          title: "New Patio and Pergola",
          href: "/blog/new-patio-and-pergola",
          items: [],
        },
      ],
    },
    {
      title: "Hiring",
      items: [
        {
          title: "Volunteer",
          href: "/hiring/1",
          items: [],
        },
        {
          title: "Care Aide",
          href: "/hiring/2",
          items: [],
        },
        {
          title: "RN/LPN",
          href: "/hiring/3",
          items: [],
        },
      ],
    },
    {
      title: "Donate",
      items: [
        {
          title: "Financial Donations",
          href: "/donate",
          items: [],
        },
        {
          title: "Legacy Brick Sale",
          href: "/donate",
          items: [],
        },
        {
          title: "Raffle Baskets",
          href: "/donate",
          items: [],
        },
        {
          title: "Wish List",
          href: "/donate",
          items: [],
        },
      ],
    },
    {
      title: "Contact",
      items: [
        {
          title: "Phone",
          href: "/contact",
          items: [],
        },
        {
          title: "Email",
          href: "/contact",
          items: [],
        },
        {
          title: "Fax",
          href: "/contact",
          items: [],
        },
        {
          title: "Address",
          href: "/contact",
          items: [],
        },
        {
          title: "Facebook",
          href: "/contact",
          items: [],
        },
        {
          title: "Instagram",
          href: "/contact",
          items: [],
        },
      ],
    },
  ],
};
