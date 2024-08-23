export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: React.HTMLAttributes<SVGElement>;
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
          title: "Fall Chicken BBQ",
          href: "/events",
          items: [],
        },
        {
          title: "End of Life Doula",
          href: "/events",
          items: [],
        },
        {
          title: "Meat Raffle",
          href: "/events",
          items: [],
        },
      ],
    },
    {
      title: "Blog",
      items: [
        {
          title: "3rd Annual Junkyard Reunion",
          href: "/blog/post/5",
          items: [],
        },
        {
          title: "7th Annual Golfing for Gateway",
          href: "/post/4",
          items: [],
        },
        {
          title: "3rd Annual Judy Russell Memorial Golf Tournament",
          href: "/post/3",
          items: [],
        },
        {
          title: "Gateway Home Dedicates Brick Walkways",
          href: "/post/2",
          items: [],
        },
        {
          title: "New Patio and Pergola",
          href: "/post/1",
          items: [],
        },
      ],
    },
    {
      title: "Hiring",
      items: [
        {
          title: "Volunteer",
          href: "/hiring",
          items: [],
        },
        {
          title: "Care Aide",
          href: "/hiring",
          items: [],
        },
        {
          title: "RN/LPN",
          href: "/hiring",
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
