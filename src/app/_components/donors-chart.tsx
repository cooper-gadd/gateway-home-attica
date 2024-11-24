"use client";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

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
    color: "hsl(0, 0%, 90%)", // #E5E4E2
  },
  gold: {
    label: "Gold",
    color: "hsl(51, 100%, 50%)", // #FFD700
  },
  silver: {
    label: "Silver",
    color: "hsl(0, 0%, 75%)", // #C0C0C0
  },
  bronze: {
    label: "Bronze",
    color: "hsl(30, 60%, 50%)", // #CD7F32
  },
} satisfies ChartConfig;

export function DonorsChart() {
  const totalDonors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.donors, 0);
  }, []);

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[500px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="donors"
          nameKey="level"
          innerRadius={60}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {totalDonors.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy ?? 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Total Donors
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
