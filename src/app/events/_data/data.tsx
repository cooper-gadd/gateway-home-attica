import { Trophy, type LucideProps } from "lucide-react";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";
import { SuperbowlSquares } from "../_components/superbowl-squares";

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
];
