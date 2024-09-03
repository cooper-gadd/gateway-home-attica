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
  },
  {
    id: "7th-annual-golfing-for-gateway",
    title: "7th Annual Golfing for Gateway",
    icon: Flag,
    author: "Sara Brunner",
    lead: "We had a phenomenal day on the course today in our 7th Annual Golfing for Gateway event!",
    content: <SeventhAnnualGolfingForGateway />,
  },
  {
    id: "3rd-annual-judy-russell-memorial-golf-tournament",
    title: "3rd Annual Judy Russell Memorial Golf Tournament",
    icon: Flag,
    author: "Sara Brunner",
    lead: "Thanks to the Russell family for another successful Judy Russell Memorial golf tournament!",
    content: <ThirdAnnualJudyRussellMemorialGolfTournament />,
  },
  {
    id: "gateway-home-dedicates-brick-walkways",
    title: "Gateway Home Dedicates Brick Walkways",
    icon: BrickWall,
    author: "Brain Quinn",
    lead: "Brick by brick, those who wanted to honor the memory of a Gateway Home resident contributed to walkways at the comfort care facility. They were able to see the results when the walkways were dedicated recently.",
    content: <GatewayHomeDedicatesBrickWalkways />,
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
  },
];
