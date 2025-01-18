import {
  Drumstick,
  Sun,
  Trophy,
  Utensils,
  type LucideProps,
} from "lucide-react";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";
import { SuperbowlSquares } from "../_components/superbowl-squares";
import { SpringChickenBbq } from "../_components/spring-chicken-bbq";
import { FirstAnnualGatewayToSummer } from "../_components/first-annual-gateway-to-summer";
import { PancakeBreakfast } from "../_components/pancake-breakfast";

export const events: {
  id: string;
  title: string;
  type: string;
  description: string;
  content: JSX.Element;
  action?: string;
  link?: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}[] = [
  {
    id: "superbowl-squares",
    title: "Superbowl Squares",
    icon: Trophy,
    type: "Fundraiser",
    description:
      "Get your football squares for the Superbowl game (Sun, Feb 9th).",
    content: <SuperbowlSquares />,
  },
  {
    id: "pancake-breakfast",
    title: "Pancake Breakfast",
    icon: Utensils,
    type: "Fundraiser",
    description: "Join us for our annual Pancake Breakfast in February 23rd.",
    content: <PancakeBreakfast />,
  },
  {
    id: "spring-chicken-bbq",
    title: "Spring Chicken BBQ",
    icon: Drumstick,
    type: "Fundraiser",
    description: "Join us for our annual Spring Chicken BBQ in May.",
    content: <SpringChickenBbq />,
  },
  {
    id: "first-annual-gateway-to-summer",
    title: "First Annual Gateway to Summer",
    icon: Sun,
    type: "Event",
    description: "Celebrate the start of summer with Gateway Home in June.",
    content: <FirstAnnualGatewayToSummer />,
  },
];
