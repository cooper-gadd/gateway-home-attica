import {
  CircleHelp,
  HandCoins,
  Heart,
  Smile,
  Target,
  Users,
} from "lucide-react";
import { Donors } from "../_components/donors";
import { FrequentlyAskedQuestions } from "../_components/fequently-asked-questions";
import { Leadership } from "../_components/leadership";
import { LifeAtGatewayHome } from "../_components/life-at-gateway-home";
import { MissionStatement } from "../_components/mission-statement";
import { ResidentCare } from "../_components/resident-care";

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
    id: "leadership",
    title: "Leadership",
    icon: Users,
    content: <Leadership />,
  },
  {
    id: "fequently-asked-questions",
    title: "Frequently Asked Questions",
    icon: CircleHelp,
    content: <FrequentlyAskedQuestions />,
  },
];
