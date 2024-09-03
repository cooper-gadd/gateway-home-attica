import { Beef, Drumstick, type LucideProps, Stethoscope } from "lucide-react";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";
import { ChickenBBQ } from "../_components/chicken-bbq";
import { EndOfLifeDoula } from "../_components/end-of-life-doula";
import { MeatRaffle } from "../_components/meat-raffle";

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
    id: "chicken-bbq",
    title: "Chicken BBQ",
    icon: Drumstick,
    type: "Fundraiser",
    description:
      "Join us on Sunday, September 8, 2024, for our Fall Chicken BBQ at the Attica Fire Department, located at 11 Water St, Attica, NY 14011. The event will run from 11:00 am to 2:00 pm, with drive-thru and take-out options available.",
    content: <ChickenBBQ />,
    action: "Buy Tickets",
    link: "https://gatewayhomeattica.networkforgood.com/events/74632-fall-chicken-bbq-sun-sept-8th",
  },
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
  {
    id: "meat-raffle",
    title: "Meat Raffle",
    icon: Beef,
    type: "Fundraiser",
    description:
      "Join us on Saturday, September 28, 2024, for an exciting evening at the Alexander Firemen’s Recreation Hall, located at 10708 Alexander Rd, Alexander, NY 14011. Doors will open at 6:00 pm, with the first spin taking place promptly at 7:00 pm.",
    content: <MeatRaffle />,
    action: "Buy Tickets",
    link: "https://gatewayhomeattica.networkforgood.com/events/74629-3rd-annual-meat-raffle-sat-9-28",
  },
];
