
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
  { date: "2024-04-01", Earthquake: 222, Cyclone: 150 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-02", Earthquake: 97, Cyclone: 180 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-03", Earthquake: 167, Cyclone: 120 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-04", Earthquake: 242, Cyclone: 260 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-05", Earthquake: 373, Cyclone: 290  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-05", Earthquake: 373, Cyclone: 290  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-06", Earthquake: 301, Cyclone: 340  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-07", Earthquake: 245, Cyclone: 180  ,Tsunami: 25, Volcanic: 56,Flood: 99},

  { date: "2024-04-08", Earthquake: 409, Cyclone: 320  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-09", Earthquake: 59, Cyclone: 110  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-10", Earthquake: 261, Cyclone: 190  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-11", Earthquake: 327, Cyclone: 350  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-12", Earthquake: 292, Cyclone: 210  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-13", Earthquake: 342, Cyclone: 380  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-14", Earthquake: 137, Cyclone: 220  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-15", Earthquake: 120, Cyclone: 170  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-16", Earthquake: 138, Cyclone: 190  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-17", Earthquake: 446, Cyclone: 360  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-18", Earthquake: 364, Cyclone: 410  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-19", Earthquake: 243, Cyclone: 180  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-20", Earthquake: 89, Cyclone: 150  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-21", Earthquake: 137, Cyclone: 200  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-22", Earthquake: 224, Cyclone: 170  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-23", Earthquake: 138, Cyclone: 230  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-24", Earthquake: 387, Cyclone: 290  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-25", Earthquake: 215, Cyclone: 250  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-26", Earthquake: 75, Cyclone: 130  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-27", Earthquake: 383, Cyclone: 420 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-28", Earthquake: 122, Cyclone: 180 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-29", Earthquake: 315, Cyclone: 240 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-04-30", Earthquake: 454, Cyclone: 380 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-01", Earthquake: 165, Cyclone: 220 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-02", Earthquake: 293, Cyclone: 310 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-03", Earthquake: 247, Cyclone: 190 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-04", Earthquake: 385, Cyclone: 420 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-05", Earthquake: 481, Cyclone: 390 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-06", Earthquake: 498, Cyclone: 520 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-07", Earthquake: 388, Cyclone: 300 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-08", Earthquake: 149, Cyclone: 210 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-09", Earthquake: 227, Cyclone: 180 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-10", Earthquake: 293, Cyclone: 330 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-11", Earthquake: 335, Cyclone: 270 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-12", Earthquake: 197, Cyclone: 240 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-13", Earthquake: 197, Cyclone: 160 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-14", Earthquake: 448, Cyclone: 490 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-15", Earthquake: 473, Cyclone: 380 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-16", Earthquake: 338, Cyclone: 400  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-17", Earthquake: 499, Cyclone: 420  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-18", Earthquake: 315, Cyclone: 350  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-19", Earthquake: 235, Cyclone: 180  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-20", Earthquake: 177, Cyclone: 230  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-21", Earthquake: 82, Cyclone: 140  ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-22", Earthquake: 81, Cyclone: 120, Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-23", Earthquake: 252, Cyclone: 290,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-24", Earthquake: 294, Cyclone: 220,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-25", Earthquake: 201, Cyclone: 250,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-26", Earthquake: 213, Cyclone: 170,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-27", Earthquake: 420, Cyclone: 460,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-28", Earthquake: 233, Cyclone: 190,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-29", Earthquake: 78, Cyclone: 130 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-30", Earthquake: 340, Cyclone: 280,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-05-31", Earthquake: 178, Cyclone: 230,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-01", Earthquake: 178, Cyclone: 200,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-02", Earthquake: 470, Cyclone: 410,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-03", Earthquake: 103, Cyclone: 160,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-04", Earthquake: 439, Cyclone: 380,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-05", Earthquake: 88, Cyclone: 140 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-06", Earthquake: 294, Cyclone: 250,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-07", Earthquake: 323, Cyclone: 370,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-08", Earthquake: 385, Cyclone: 320,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-09", Earthquake: 438, Cyclone: 480,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-10", Earthquake: 155, Cyclone: 200,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-11", Earthquake: 92, Cyclone: 150 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-12", Earthquake: 492, Cyclone: 420,Tsunami: 25, Volcanic: 56,Flood: 99 },
  { date: "2024-06-13", Earthquake: 81, Cyclone: 130 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-14", Earthquake: 426, Cyclone: 380 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-15", Earthquake: 307, Cyclone: 350 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-16", Earthquake: 371, Cyclone: 310 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-17", Earthquake: 475, Cyclone: 520 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-18", Earthquake: 107, Cyclone: 170 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-19", Earthquake: 341, Cyclone: 290 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-20", Earthquake: 408, Cyclone: 450 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-21", Earthquake: 169, Cyclone: 210 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-22", Earthquake: 317, Cyclone: 270 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-23", Earthquake: 480, Cyclone: 530 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-24", Earthquake: 132, Cyclone: 180 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-25", Earthquake: 141, Cyclone: 190 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-26", Earthquake: 434, Cyclone: 380 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-27", Earthquake: 448, Cyclone: 490 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-28", Earthquake: 149, Cyclone: 200 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-29", Earthquake: 103, Cyclone: 160 ,Tsunami: 25, Volcanic: 56,Flood: 99},
  { date: "2024-06-30", Earthquake: 446, Cyclone: 400 ,Tsunami: 25, Volcanic: 56,Flood: 99},
]

const chartConfig = {
  views: {
    label: "Page Views",
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
