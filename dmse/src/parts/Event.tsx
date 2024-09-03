
"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
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
  { date: "2024-04-01", Earthquake: 1, Cyclone: 1,Tsunami: 1, Volcanic: 1,Flood: 1},

  { date: "2024-04-03", Earthquake: 0, Cyclone: 0 ,Tsunami: 0, Volcanic: 0,Flood: 0},
  { date: "2024-04-22", Earthquake: 1, Cyclone: 2  ,Tsunami: 0, Volcanic:1,Flood: 1},
  { date: "2024-04-27", Earthquake: 0, Cyclone: 0 ,Tsunami: 0, Volcanic:1,Flood: 0},
  { date: "2024-04-28", Earthquake: 1, Cyclone: 0 ,Tsunami: 0, Volcanic:1,Flood: 1},
  { date: "2024-04-29", Earthquake: 0, Cyclone: 2 ,Tsunami: 1, Volcanic: 0,Flood: 0},

  { date: "2024-05-01", Earthquake: 0, Cyclone: 0 ,Tsunami: 0, Volcanic: 2,Flood: 1},

  { date: "2024-05-03", Earthquake: 1, Cyclone: 1 ,Tsunami: 0, Volcanic: 0,Flood: 0},
  { date: "2024-05-04", Earthquake: 0, Cyclone: 0 ,Tsunami: 0, Volcanic: 0,Flood: 1},


  { date: "2024-05-21", Earthquake:  0, Cyclone: 0  ,Tsunami: 0, Volcanic: 0,Flood: 1},
  { date: "2024-05-22", Earthquake: 1, Cyclone: 1, Tsunami:0 , Volcanic: 0,Flood: 0},
  { date: "2024-05-23", Earthquake: 0, Cyclone:0,Tsunami: 0, Volcanic:1,Flood: 1},
  { date: "2024-05-24", Earthquake: 1, Cyclone: 0,Tsunami: 0, Volcanic: 0,Flood: 1},
  { date: "2024-05-25", Earthquake: 0, Cyclone: 2,Tsunami: 1, Volcanic: 0,Flood: 0},
  
  { date: "2024-05-30", Earthquake: 1, Cyclone: 0,Tsunami: 0, Volcanic: 0,Flood: 1},
  { date: "2024-05-31", Earthquake: 0, Cyclone: 1,Tsunami: 0, Volcanic:1,Flood: 0},
  
  { date: "2024-06-06", Earthquake: 1, Cyclone: 1,Tsunami: 0, Volcanic: 0,Flood: 1},


  { date: "2024-06-09", Earthquake: 0, Cyclone: 0,Tsunami: 1, Volcanic: 0,Flood: 0},

  { date: "2024-06-30", Earthquake: 1, Cyclone: 1 ,Tsunami: 0, Volcanic: 0,Flood: 1},

]

const chartConfig = {
  views: {
    label: "Number",
  },
  Earthquake: {
    label: "Earthquake",
    color: "hsl(var(--chart-1))",
  },
  Cyclone: {
    label: "Cyclone",
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

export function Event() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("Earthquake")

  const total = React.useMemo(
    () => ({
      Earthquake: chartData.reduce((acc, curr) => acc + curr.Earthquake, 0),
      Cyclone: chartData.reduce((acc, curr) => acc + curr.Cyclone, 0),
      Volcanic: chartData.reduce((acc, curr) => acc + curr.Volcanic, 0),
      Tsunami : chartData.reduce((acc, curr) => acc + curr.Tsunami, 0),
      Flood: chartData.reduce((acc, curr) => acc + curr.Flood, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Line Chart </CardTitle>
          <CardDescription>
            sowing last 3 month Analysis
          </CardDescription>
        </div>
        <div className="flex">
          {["Earthquake", "Cyclone","Tsunami","Volcanic","Flood"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
