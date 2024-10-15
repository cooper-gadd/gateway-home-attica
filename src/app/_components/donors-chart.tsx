"use client";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const chartData = [
  { level: "platinum", donors: 4, fill: "var(--color-platinum)" },
  { level: "gold", donors: 12, fill: "var(--color-gold)" },
  { level: "silver", donors: 11, fill: "var(--color-silver)" },
  { level: "bronze", donors: 93, fill: "var(--color-bronze)" },
];

const chartConfig = {
  donors: {
    label: "Donors",
  },
  platinum: {
    label: "Platinum",
    color: "#E5E4E2",
  },
  gold: {
    label: "Gold",
    color: "#FFD700",
  },
  silver: {
    label: "Silver",
    color: "#C0C0C0;",
  },
  bronze: {
    label: "Bronze",
    color: "#CD7F32",
  },
} satisfies ChartConfig;

export function DonorsChart() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData} layout="vertical">
        <YAxis
          dataKey="level"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) =>
            chartConfig[value as keyof typeof chartConfig]?.label
          }
        />
        <XAxis dataKey="donors" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="donors" layout="vertical" radius={5} />
      </BarChart>
    </ChartContainer>
  );
}
