"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

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
  { Disaster: "Earthquake", No: 275, fill: "var(--color-Earthquake)" },
  { Disaster: "Cyclone", No: 200, fill: "var(--color-Cyclone)" },
  { Disaster: "Volcanic_eruption", No: 287, fill: "var(--color-Volcanic_eruption)" },
  { Disaster: "Tsunami", No: 173, fill: "var(--color-Tsunami)" },
  { Disaster: "Flood", No: 190, fill: "var(--color-Flood)" },
]

const chartConfig = {
  No: {
    label: "Total",
  },
  Earthquake: {
    label: "Earthquake",
    color: "hsl(var(--chart-1))",
  },
  Cyclone: {
    label: "Cyclone",
    color: "hsl(var(--chart-2))",
  },
Volcanic_eruption: {
    label: " Volcanic_eruption",
    color: "hsl(var(--chart-3))",
  },
  Tsunami: {
    label: "Flood",
    color: "hsl(var(--chart-4))",
  },
  Flood: {
    label: "Flood",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function Pie_Chart() {
  const totalNo = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.No, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart</CardTitle>
        <CardDescription> Yearly Predection</CardDescription>
      </CardHeader>
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
              dataKey="No"
              nameKey="Disaster"
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
                          {totalNo.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                 Total
                         
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
        Showing total No of desasters 
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
        </div>
      </CardFooter>
    </Card>
  )
}
