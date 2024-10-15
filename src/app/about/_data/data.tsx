import { CircleHelp, HandCoins, Heart, Smile, Target } from "lucide-react";
import { FrequentlyAskedQuestions } from "../_components/fequently-asked-questions";
import { LifeAtGatewayHome } from "../_components/life-at-gateway-home";
import { MissionStatement } from "../_components/mission-statement";
import { ResidentCare } from "../_components/resident-care";
import { Donors } from "../_components/donors";

export const abouts = [
  {
    id: "mission-statement",
    title: "Mission Statement",
    icon: Target,
    content: <MissionStatement />,
  },
  {
    id: "resident-care",
    title: "Resident Care",
    icon: Heart,
    content: <ResidentCare />,
  },
  {
    id: "life-at-gateway-home",
    title: "Life at Gateway Home",
    icon: Smile,
    content: <LifeAtGatewayHome />,
  },
  {
    id: "donors",
    title: "Donors",
    icon: HandCoins,
    content: <Donors />,
  },
  {
    id: "fequently-asked-questions",
    title: "Frequently Asked Questions",
    icon: CircleHelp,
    content: <FrequentlyAskedQuestions />,
  },
];
