import { Donors } from "../_components/donors";
import { Leadership } from "../_components/leadership";
import { LifeAtGatewayHome } from "../_components/life-at-gateway-home";
import { MissionStatement } from "../_components/mission-statement";
import { OurHistory } from "../_components/our-history";
import { ResidentCare } from "../_components/resident-care";

export const abouts = [
  {
    id: "donors",
    title: "Donors",
    author: "Various Authors",
    content: <Donors />,
  },
  {
    id: "leadership",
    title: "Leadership",
    author: "Various Authors",
    content: <Leadership />,
  },
  {
    id: "life-at-gateway-home",
    title: "Life at Gateway Home",
    author: "Various Authors",
    content: <LifeAtGatewayHome />,
  },
  {
    id: "mission-statement",
    title: "Mission Statement",
    author: "Various Authors",
    content: <MissionStatement />,
  },
  {
    id: "our-history",
    title: "Our History",
    author: "Various Authors",
    content: <OurHistory />,
  },
  {
    id: "resident-care",
    title: "Resident Care",
    author: "Various Authors",
    content: <ResidentCare />,
  },
];
