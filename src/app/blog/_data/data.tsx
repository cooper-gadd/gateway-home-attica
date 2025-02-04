import {
  BrickWall,
  Flower2,
  Hammer,
  type LucideProps,
  Newspaper,
} from "lucide-react";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";
import { GatewayHomeDedicatesBrickWalkways } from "../_components/gateway-home-dedicates-brick-walkways";
import { NewPatioAndPergola } from "../_components/new-patio-and-pergola";
import { FirstAnnualGatewayHomeMemorialService } from "../_components/first-annual-gateway-home-memorial-service";

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
  href?: string;
}[] = [
  {
    id: "first-annual-gateway-home-memorial-service",
    title: "First Annual Gateway Home Memorial Service",
    icon: Flower2,
    author: "Sara Brunner",
    date: "November 13, 2024",
    readTime: "3 minute read",
    description:
      "Gateway Home hosted its first annual Memorial Service at the 1st Baptist Church in Attica, honoring 77 residents who passed away in our care. The evening featured songs, remembrance, and fellowship, establishing a new yearly tradition each November.",
    content: <FirstAnnualGatewayHomeMemorialService />,
  },
  {
    id: "fall-2024-winter-2025-newsletter",
    title: "Fall 2024/Winter 2025 Newsletter",
    icon: Newspaper,
    author: "Various Authors",
    date: "Fall 2024/Winter 2025",
    readTime: "10 minute read",
    description:
      "Our Fall 2024/Winter 2025 newsletter reflects on a busy summer of fundraising events and community support. Director Sara Brunner shares insights on recent activities, including concession stands, golf tournaments, and a touching memorial brick dedication. The newsletter highlights Gateway Home's ongoing mission to provide compassionate end-of-life care, featuring stories of resident care, volunteer spotlights, and upcoming events. Learn about the distinctions between comfort care, hospice care, and palliative care, and discover how you can support Gateway Home's vital work in the community.",
    href: "/pdfs/fall-2024-winter-2025-newsletter.pdf",
  },
  {
    id: "gateway-home-dedicates-brick-walkways",
    title: "Gateway Home Dedicates Brick Walkways",
    icon: BrickWall,
    author: "Brain Quinn",
    date: "July 13, 2024",
    readTime: "4 minute read",
    description:
      "Join Gateway Home as they unveil their touching new memorial brick walkways. This article captures the emotional dedication ceremony, where each brick represents a cherished memory of a former resident. Discover how this project, supported by the East Hill Foundation, has transformed the home's exterior while creating a lasting tribute to those who have passed. Director Sara Brunner and President Doug Domes share insights on the project's significance and the continued community support that makes Gateway Home's mission possible.",
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
      "Our Spring/Summer 2024 newsletter introduces our new director, Sara Brunner, and highlights Gateway Home's ongoing commitment to compassionate end-of-life care. Learn about our community outreach efforts, upcoming fundraising events, and exciting new projects like our brick walkway initiative. Discover how our volunteers and staff work together to provide comfort and support to residents and their families, and find out how you can contribute to our mission.",
    href: "/pdfs/spring-summer-2024-newsletter.pdf",
  },
  {
    id: "spring-2023-newletter",
    title: "Spring 2023 Newsletter",
    icon: Newspaper,
    author: "Various Authors",
    date: "Spring 2023",
    readTime: "10 minute read",
    description:
      "Our Spring 2023 newsletter offers insights into the compassionate care provided at Gateway Home. It features a message from our director, volunteer spotlights, upcoming events, and updates on our community partnerships. Learn about our mission, the importance of comfort care homes, and how you can support our work.",
    href: "/pdfs/spring-2023-newsletter.pdf",
  },
  {
    id: "new-patio-and-pergola",
    title: "New Patio and Pergola",
    icon: Hammer,
    author: "Nathan Montford",
    date: "September 1, 2022",
    readTime: "2 minute read",
    description:
      "Experience the community spirit that built Gateway Home's new outdoor space. This heartwarming story details the construction of a decorative concrete patio and pergola, showcasing the power of volunteerism. From initial groundwork to the final touches, learn how local skilled workers and dedicated community members came together to create a beautiful area for residents and their families to enjoy.",
    content: <NewPatioAndPergola />,
  },
];
