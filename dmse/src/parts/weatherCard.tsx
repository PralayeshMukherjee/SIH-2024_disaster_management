import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircleIcon } from "lucide-react";
import { fetchWeatherData } from "@/utils/useWeatherData"; 

interface WeatherCardProps {
  onClose: () => void;
}

export function WeatherCard({ onClose }: WeatherCardProps) {
  const [weatherData, setWeatherData] = useState<{ precipitation: number; humidity: number } | null>(null);

  useEffect(() => {
    fetchWeatherData().then(data => setWeatherData(data));
  }, []);

  return (
    <Card className="relative w-[350px] bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl border-hidden text-emerald-200">
      <button
        className="absolute top-2 right-2 p-1 text-gray-500 hover:text-red-700"
        onClick={onClose}
      >
        <XCircleIcon className="h-5 w-5" />
      </button>
      <CardHeader>
        <CardTitle>Weather Data</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid items-center gap-2">
            <div className="flex space-x-20 text-center">
              <p className="font-bold">Precipitation :</p>
              <p className="font-light">{weatherData?.precipitation ?? "Loading..."}</p>
            </div>
            <div className="flex space-x-20 text-center">
              <p className="font-bold">Humidity : </p>
              <p className="font-light">{weatherData?.humidity ?? "Loading..."}</p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="bg-white/20">Analyse the parameters</Button>
      </CardFooter>
    </Card>
  );
}