import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
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
  { day: "Sun", temperature: 186, atmospheric_pressure: 80,Humidity: 25, Precipitation: 56,Wind: 99 },
  { day: "Mon", temperature: 305, atmospheric_pressure: 200, Humidity: 85, Precipitation:56,Wind: 99},
  { day: "Tues", temperature: 237, atmospheric_pressure: 120, Humidity: 95, Precipitation:66,Wind: 99},
  { day: "wed", temperature: 73, atmospheric_pressure: 190, Humidity: 85, Precipitation:126 ,Wind: 99},
  { day: "Fri", temperature: 209, atmospheric_pressure: 130, Humidity: 5, Precipitation:62,Wind: 99},
  { day: "Sat", temperature: 214, atmospheric_pressure: 140, Humidity: 25,Precipitation:66,Wind: 99},
  { day: "Fri", temperature: 214, atmospheric_pressure: 140, Humidity: 25,Precipitation:66,Wind: 99},
]
const chartConfig = {
  temperature: {
    label: "temperature",
    color: "hsl(var(--chart-1))",
  },
  atmospheric_pressure: {
    label: "atmospheric_pressure",
    color: "hsl(var(--chart-2))",
  },
  Humidity: {
    label: "Humidity",
    color: "hsl(var(--chart-3))",
  },
  Precipitation: {
    label: "Precipitation",
    color: "hsl(var(--chart-4))",
  },
  Wind: {
    label: "Wind",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig



export function Parameter ()
 {
  return (
<Card>
      <CardHeader>
        <CardTitle>Parameter</CardTitle>
        <CardDescription>
          Showing climatic conditions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
            }}
            stackOffset="expand"
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="other"
              type="natural"
              fill="var(--color-other)"
              fillOpacity={0.1}
              stroke="var(--color-other)"
              stackId="a"
            />
            <Area
              dataKey="temperature"
              type="natural"
              fill="var(--color-temperature)"
              fillOpacity={0.4}
              stroke="var(--color-temperature)"
              stackId="a"
            />
            <Area
              dataKey="atmospheric_pressure"
              type="natural"
              fill="var(--color-atmospheric_pressure)"
              fillOpacity={0.4}
              stroke="var(--color-atmospheric_pressure)"
              stackId="a"
            />
              <Area
              dataKey="Humidity"
              type="natural"
              fill="var(--color-Humidity)"
              fillOpacity={0.4}
              stroke="var(--color-Humidity)"
              stackId="a"
            />
              <Area
              dataKey="Precipitation"
              type="natural"
              fill="var(--color-Precipitation)"
              fillOpacity={0.4}
              stroke="var(--color-Precipitation)"
              stackId="a"
            />
              <Area
              dataKey="Wind"
              type="natural"
              fill="var(--color-Wind)"
              fillOpacity={0.4}
              stroke="var(--color-Wind)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
             Weather Indicators <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
             last 7 days parameters
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default Parameter