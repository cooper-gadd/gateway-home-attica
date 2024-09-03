import {
  BrickWall,
  Car,
  Flag,
  Hammer,
  HelpCircle,
  type LucideProps,
  Newspaper,
} from "lucide-react";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";
import { FrequentlyAskedQuestions } from "../_components/fequently-asked-questions";
import { ThirdAnnualJunkyardReunion } from "../_components/third-annual-junkyard-reunion";
import { SeventhAnnualGolfingForGateway } from "../_components/seventh-annual-golfing-for-gateway";
import { ThirdAnnualJudyRussellMemorialGolfTournament } from "../_components/third-annual-judy-russell-memorial-golf-tournament";
import { GatewayHomeDedicatesBrickWalkways } from "../_components/gateway-home-dedicates-brick-walkways";
import { NewPatioAndPergola } from "../_components/new-patio-and-pergola";

export const posts: {
  id: string;
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  author: string;
  lead: string;
  content?: JSX.Element;
  images?: { src: string; alt: string }[];
  link?: string;
}[] = [
  {
    id: "fequently-asked-questions",
    title: "Frequently Asked Questions",
    icon: HelpCircle,
    author: "Various Authors",
    lead: "Here are some of the most frequently asked questions about Gateway Home.",
    content: <FrequentlyAskedQuestions />,
  },
  {
    id: "3rd-annual-junkyard-reunion",
    title: "3rd Annual Junkyard Reunion",
    icon: Car,
    author: "Sara Brunner",
    lead: "The Junkyard Reunion was an absolute HOOT!",
    content: <ThirdAnnualJunkyardReunion />,
    images: [
      {
        src: "/images/blog/3rd-annual-junkyard-reunion/cars-1.jpg",
        alt: "Cars 1",
      },
      {
        src: "/images/blog/3rd-annual-junkyard-reunion/cars-2.jpg",
        alt: "Cars 2",
      },
      {
        src: "/images/blog/3rd-annual-junkyard-reunion/cars-3.jpg",
        alt: "Cars 3",
      },
      {
        src: "/images/blog/3rd-annual-junkyard-reunion/cars-4.jpg",
        alt: "Cars 4",
      },
      {
        src: "/images/blog/3rd-annual-junkyard-reunion/cars-5.jpg",
        alt: "Cars 5",
      },
      {
        src: "/images/blog/3rd-annual-junkyard-reunion/rosie.jpg",
        alt: "Rosie",
      },
      {
        src: "/images/blog/3rd-annual-junkyard-reunion/baskets.jpg",
        alt: "Baskets",
      },
    ],
  },
  {
    id: "7th-annual-golfing-for-gateway",
    title: "7th Annual Golfing for Gateway",
    icon: Flag,
    author: "Sara Brunner",
    lead: "We had a phenomenal day on the course today in our 7th Annual Golfing for Gateway event!",
    content: <SeventhAnnualGolfingForGateway />,
    images: [
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/pink-ladies.jpg",
        alt: "Pink Ladies",
      },
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/couple.jpg",
        alt: "Couple",
      },
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/ladies.jpg",
        alt: "Ladies",
      },
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/putting-contest.jpg",
        alt: "Putting Contest",
      },
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/club-car.jpg",
        alt: "Club Car",
      },
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/sponsors.jpg",
        alt: "Sponsors",
      },
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/sue-sara.jpg",
        alt: "Sue and Sara",
      },
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/shots.jpg",
        alt: "Shots",
      },
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/19-shot.jpg",
        alt: "19 Shot",
      },
    ],
  },
  {
    id: "3rd-annual-judy-russell-memorial-golf-tournament",
    title: "3rd Annual Judy Russell Memorial Golf Tournament",
    icon: Flag,
    author: "Sara Brunner",
    lead: "Thanks to the Russell family for another successful Judy Russell Memorial golf tournament!",
    content: <ThirdAnnualJudyRussellMemorialGolfTournament />,
    images: [
      {
        src: "/images/blog/3rd-annual-judy-russell-memorial-golf-tournament/carts.jpg",
        alt: "Carts",
      },
      {
        src: "/images/blog/3rd-annual-judy-russell-memorial-golf-tournament/dudes-cart.jpg",
        alt: "Dudes Cart",
      },
      {
        src: "/images/blog/3rd-annual-judy-russell-memorial-golf-tournament/people-cart.jpg",
        alt: "People Cart",
      },
      {
        src: "/images/blog/3rd-annual-judy-russell-memorial-golf-tournament/jim.jpg",
        alt: "Jim",
      },
      {
        src: "/images/blog/3rd-annual-judy-russell-memorial-golf-tournament/drawing.jpg",
        alt: "Drawing",
      },
      {
        src: "/images/blog/3rd-annual-judy-russell-memorial-golf-tournament/winners.jpg",
        alt: "Winners",
      },
    ],
  },
  {
    id: "gateway-home-dedicates-brick-walkways",
    title: "Gateway Home Dedicates Brick Walkways",
    icon: BrickWall,
    author: "Brain Quinn",
    lead: "Brick by brick, those who wanted to honor the memory of a Gateway Home resident contributed to walkways at the comfort care facility. They were able to see the results when the walkways were dedicated recently.",
    content: <GatewayHomeDedicatesBrickWalkways />,
    images: [
      {
        src: "/images/blog/gateway-home-dedicates-brick-walkways/doug-speaking.jpg",
        alt: "Doug Speaking",
      },
      {
        src: "/images/blog/gateway-home-dedicates-brick-walkways/sara-speaking.jpg",
        alt: "Sara Speaking",
      },
      {
        src: "/images/blog/gateway-home-dedicates-brick-walkways/doug-sara.jpg",
        alt: "Doug and Sara",
      },
      {
        src: "/images/blog/gateway-home-dedicates-brick-walkways/sara.jpg",
        alt: "Sara",
      },
      {
        src: "/images/blog/gateway-home-dedicates-brick-walkways/bricks.jpg",
        alt: "Bricks",
      },
    ],
  },
  {
    id: "spring-summer-2024-newletter",
    title: "Spring/Summer 2024 Newsletter",
    icon: Newspaper,
    author: "Various Authors",
    lead: "This month's newsletter highlights the compassionate care provided by Gateway Home, our upcoming fundraising events, and a special feature on the dedicated volunteers who make our mission possible. Learn about our resident stories, see how your donations are making an impact, and get a sneak peek into our future plans.",
    link: "/pdfs/spring-summer-2024-newletter.pdf",
  },
  {
    id: "new-patio-and-pergola",
    title: "New Patio and Pergola",
    icon: Hammer,
    author: "Nathan Montford",
    lead: "Another wonderful project for the Gateway Home done and ready for the resident families to enjoy spending time with loved ones on the decorative concrete pad and underneath the new fancy pergola. Once again, it was a project that just simply couldn’t have gotten done without the help of the community stepping up and volunteering.",
    content: <NewPatioAndPergola />,
    images: [
      {
        src: "/images/blog/new-patio-and-pergola/truck.jpg",
        alt: "Truck",
      },
      {
        src: "/images/blog/new-patio-and-pergola/pouring.jpg",
        alt: "Pouring",
      },
      {
        src: "/images/blog/new-patio-and-pergola/memory.jpg",
        alt: "Memory",
      },
      {
        src: "/images/blog/new-patio-and-pergola/drying.jpg",
        alt: "Drying",
      },
      {
        src: "/images/blog/new-patio-and-pergola/pillars.jpg",
        alt: "Pillars",
      },
      {
        src: "/images/blog/new-patio-and-pergola/roof.jpg",
        alt: "Roof",
      },
      {
        src: "/images/blog/new-patio-and-pergola/final.jpg",
        alt: "Final",
      },
    ],
  },
];
