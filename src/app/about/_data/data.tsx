import {
  BookOpen,
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
import { OurHistory } from "../_components/our-history";
import { ResidentCare } from "../_components/resident-care";

export const abouts = [
  {
    id: "mission-statement",
    title: "Mission Statement",
    icon: Target,
    author: "Various Authors",
    content: <MissionStatement />,
  },
  {
    id: "resident-care",
    title: "Resident Care",
    icon: Heart,
    author: "Various Authors",
    content: <ResidentCare />,
  },
  {
    id: "life-at-gateway-home",
    title: "Life at Gateway Home",
    icon: Smile,
    author: "Various Authors",
    content: <LifeAtGatewayHome />,
  },
  {
    id: "our-history",
    title: "Our History",
    icon: BookOpen,
    author: "Various Authors",
    content: <OurHistory />,
  },
  {
    id: "donors",
    title: "Donors",
    icon: HandCoins,
    author: "Various Authors",
    content: <Donors />,
  },
  {
    id: "leadership",
    title: "Leadership",
    icon: Users,
    author: "Various Authors",
    content: <Leadership />,
  },
  {
    id: "fequently-asked-questions",
    title: "Frequently Asked Questions",
    icon: CircleHelp,
    author: "Various Authors",
    content: <FrequentlyAskedQuestions />,
  },
];
