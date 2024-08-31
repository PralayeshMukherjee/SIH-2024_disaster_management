"use client"


import { Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,

} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart with an active sector"

const chartData = [
  { browser: "Sure", persentage:90, fill: "var(--color-chrome)" },
  {prediction: "May be not", persentage:30, fill: "var(--color-safari)" },

]

const chartConfig = {
  visitors: {
    label: "persentage",
  },
  chrome: {
    label: "sure",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "May be not",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Possiblity() {
  return (
    <Card className="flex flex-col">
   
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
     
    </Card>
  )
}

