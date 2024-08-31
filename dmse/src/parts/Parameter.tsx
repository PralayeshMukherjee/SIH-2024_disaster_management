import { useEffect, useState } from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { fetchHourlyWeatherData } from '@/utils/climateChangeData'; 
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { TrendingUp } from 'lucide-react';

const ClimateGraph = () => {
  const [data, setData] = useState<any[]>([]);

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

  useEffect(() => {
    const getData = async () => {
      try {
        const weatherData = await fetchHourlyWeatherData();
        const formattedData = weatherData.time.map((time: string, index: number) => ({
          time,
          temperature_2m: weatherData.temperature_2m[index],
          wind_speed_10m: weatherData.wind_speed_10m[index],
          relative_humidity_2m: weatherData.relative_humidity_2m[index],
          precipitation_probability: weatherData.precipitation_probability[index],
          surface_pressure: weatherData.surface_pressure[index],
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
      }
    };

    getData();
  }, []);

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
        data={data}
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" tickFormatter={(value) => value.slice(11, 16)} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="temperature_2m"
          stroke="#8884d8"
          fill="#8884d8"
          name="Temperature"
        />
        <Area
          type="monotone"
          dataKey="wind_speed_10m"
          stroke="#82ca9d"
          fill="#82ca9d"
          name="Wind Speed"
        />
        <Area
          type="monotone"
          dataKey="relative_humidity_2m"
          stroke="#ff7300"
          fill="#ff7300"
          name="Humidity"
        />
        <Area
          type="monotone"
          dataKey="precipitation_probability"
          stroke="#ff0000"
          fill="#ff0000"
          name="Precipitation"
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
  );
};

export default ClimateGraph;