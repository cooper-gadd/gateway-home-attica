import {
  BriefcaseBusiness,
  Calendar,
  Contact,
  Cuboid,
  Gift,
  HandCoins,
  Home,
  NotebookPen,
  ScrollText,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";
import { abouts } from "../about/_data/data";
import { posts } from "../blog/_data/data";
import { socials } from "../contact/_data/data";
import { events } from "../events/_data/data";
import { hirings } from "../hiring/_data/data";

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

interface DataItem {
  id: string | number;
  title: string;
  icon: LucideIcon;
  href?: string;
}

function createNavItems<T extends DataItem>(
  items: T[],
  pathPrefix: string,
): NavItemWithChildren[] {
  return items.map((item) => ({
    title: item.title,
    href: item.href ?? `${pathPrefix}/${item.id}`,
    icon: item.icon,
    items: [],
  }));
}

export const navConfig: NavConfig = {
  mainNav: [
    { title: "Home", href: "/", icon: Home },
    { title: "Events", href: "/events", icon: Calendar },
    { title: "Blog", href: "/blog", icon: NotebookPen },
    { title: "Hiring", href: "/hiring", icon: BriefcaseBusiness },
    { title: "Donate", href: "/donate", icon: HandCoins },
    { title: "Contact", href: "/contact", icon: Contact },
  ],
  pageNav: [
    {
      title: "About",
      items: createNavItems(abouts, "/about"),
    },
    {
      title: "Events",
      items: createNavItems(events, "/events"),
    },
    {
      title: "Blog",
      items: createNavItems(posts, "/blog"),
    },
    {
      title: "Hiring",
      items: createNavItems(hirings, "/hiring"),
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
      items: createNavItems(socials, "/contact"),
    },
  ],
};
