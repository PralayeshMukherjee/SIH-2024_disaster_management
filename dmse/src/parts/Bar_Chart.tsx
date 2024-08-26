"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", Cyclone: 186, Earthquake: 80,Tsunami: 25, Volcanic: 56,Flood: 99 },
  { month: "February", Cyclone: 305, Earthquake: 200, Tsunami: 85, Volcanic:56,Flood: 99},
  { month: "March", Cyclone: 237, Earthquake: 120, Tsunami: 95, Volcanic:66,Flood: 99},
  { month: "April", Cyclone: 73, Earthquake: 190, Tsunami: 85, Volcanic:126 ,Flood: 99},
  { month: "May", Cyclone: 209, Earthquake: 130, Tsunami: 5, Volcanic:62,Flood: 99},
  { month: "June", Cyclone: 214, Earthquake: 140, Tsunami: 25,Volcanic:66,Flood: 99},
]

const chartConfig = {
  Cyclone: {
    label: "Cyclone",
    color: "hsl(var(--chart-1))",
  },
  Earthquake: {
    label: "Earthquake",
    color: "hsl(var(--chart-2))",
  },
  Tsunami: {
    label: "Tsunami",
    color: "hsl(var(--chart-3))",
  },
  Volcanic: {
    label: "Volcanic",
    color: "hsl(var(--chart-4))",
  },
  Flood: {
    label: "Flood",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function Bar_Chart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="Cyclone" fill="var(--color-Cyclone)" radius={4} />
            <Bar dataKey="Earthquake" fill="var(--color-Earthquake)" radius={4} />
            <Bar dataKey="Tsunami" fill="var(--color-Tsunami)" radius={4} />
            <Bar dataKey="Volcanic" fill="var(--color-Volcanic)" radius={4} />
            <Bar dataKey="Flood" fill="var(--color-Flood)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
