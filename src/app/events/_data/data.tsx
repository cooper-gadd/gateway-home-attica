import { DollarSign, type LucideProps } from "lucide-react";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";
import { CashRaffle } from "../_components/cash-raffle";

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
    id: "cash-raffle",
    title: "Cash Raffle",
    icon: DollarSign,
    type: "Fundraiser",
    description:
      "Join our exciting cash raffle fundraiser with $50,000 in total prizes! Only 1,000 tickets available at $20 each, with multiple chances to win including a grand prize of $2,500. Drawing will be held during Attica's Winterfest on December 14th, 2024 at Gateway Home. Winners need not be present to win.",
    content: <CashRaffle />,
    action: "Buy Tickets",
    link: "https://gatewayhomeattica.networkforgood.com/events/77462-cash-raffle-2024?fbclid=IwZXh0bgNhZW0CMTAAAR2xD1PeWxdwL7yNRZG1TMCwtD9tvGX3G6L6cCLLDJMzPU0am7xSddyp1mw_aem_ePsseGJW0Csc2DelvRl8Dw",
  },
];
