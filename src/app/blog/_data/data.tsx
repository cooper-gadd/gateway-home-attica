import { BrickWall, Hammer, type LucideProps, Newspaper } from "lucide-react";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";
import { GatewayHomeDedicatesBrickWalkways } from "../_components/gateway-home-dedicates-brick-walkways";
import { NewPatioAndPergola } from "../_components/new-patio-and-pergola";

export const posts: {
  id: string;
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  author: string;
  date: string;
  readTime: string;
  description: string;
  content?: JSX.Element;
  link?: string;
}[] = [
  {
    id: "gateway-home-dedicates-brick-walkways",
    title: "Gateway Home Dedicates Brick Walkways",
    icon: BrickWall,
    author: "Brain Quinn",
    date: "July 13, 2024",
    readTime: "4 minute read",
    description:
      "Brick by brick, those who wanted to honor the memory of a Gateway Home resident contributed to walkways at the comfort care facility. They were able to see the results when the walkways were dedicated recently.",
    content: <GatewayHomeDedicatesBrickWalkways />,
  },
  {
    id: "spring-summer-2024-newletter",
    title: "Spring/Summer 2024 Newsletter",
    icon: Newspaper,
    author: "Various Authors",
    date: "Spring/Summer 2024",
    readTime: "8 minute read",
    description:
      "This newsletter highlights the compassionate care provided by Gateway Home, our upcoming fundraising events, and a special feature on the dedicated volunteers who make our mission possible. Learn about our resident stories, see how your donations are making an impact, and get a sneak peek into our future plans.",
    link: "/pdfs/spring-summer-2024-newletter.pdf",
  },
  {
    id: "new-patio-and-pergola",
    title: "New Patio and Pergola",
    icon: Hammer,
    author: "Nathan Montford",
    date: "September 1, 2022",
    readTime: "2 minute read",
    description:
      "Another wonderful project for the Gateway Home done and ready for the resident families to enjoy spending time with loved ones on the decorative concrete pad and underneath the new fancy pergola. Once again, it was a project that just simply couldn’t have gotten done without the help of the community stepping up and volunteering.",
    content: <NewPatioAndPergola />,
  },
];
