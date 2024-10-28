import { type LucideProps, Stethoscope } from "lucide-react";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";
import { EndOfLifeDoula } from "../_components/end-of-life-doula";

export const events: {
  id: string;
  title: string;
  type: string;
  description: string;
  content: JSX.Element;
  action: string;
  link: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}[] = [
  {
    id: "end-of-life-doula",
    title: "End of Life Doula",
    icon: Stethoscope,
    type: "Training Course",
    description:
      "We are excited to announce an 8-week End of Life Doula training course at Gateway Home, beginning Wednesday, September 18th. This immersive program is designed to empower caregivers with the skills and wisdom to offer compassionate support to those nearing the end of life. The class will take place every Wednesday for eight consecutive weeks, providing both practical and spiritual tools to help those in their final days live fully until they pass.",
    content: <EndOfLifeDoula />,
    action: "Register Now",
    link: "mailto:sara@gatewayhomeattica.org",
  },
];
