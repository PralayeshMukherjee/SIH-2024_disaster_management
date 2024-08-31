import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircleIcon, RepeatIcon } from "lucide-react"; 
import { fetchWeatherData } from "@/utils/useWeatherData"; 
import { predictNextDayWeather } from "@/utils/preditWeather";

interface WeatherCardProps {
  onClose: () => void;
}

export function WeatherCard({ onClose }: WeatherCardProps) {
  const [weatherData, setWeatherData] = useState<{
    temperature: number;
    humidity: number;
    precipitation: number;
    windSpeed: number;
    pressure: number;
  } | null>(null);

  const [predictedData, setPredictedData] = useState<{
    temperature: number;
    humidity: number;
    precipitation: number;
    windSpeed: number;
    pressure: number;
  } | null>(null);

  const [showCurrent, setShowCurrent] = useState(true); 

  useEffect(() => {
    fetchWeatherData().then(data => {
      setWeatherData(data);
      const prediction = predictNextDayWeather(data);
      setPredictedData(prediction);
    });
  }, []);

  const toggleData = () => {
    setShowCurrent(prevState => !prevState);
  };

  const formatNumber = (value: number | undefined) => value?.toFixed(2) ?? "Loading...";

  return (
    <Card className="relative w-[350px] bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl border-hidden text-emerald-200">
      <button
        className="absolute top-2 right-2 p-1 text-gray-500 hover:text-red-700"
        onClick={onClose}
      >
        <XCircleIcon className="h-5 w-5" />
      </button>
      <button
        className="absolute top-2 right-9 p-1 text-black-500 hover:text-gray-700"
        onClick={toggleData}
      >
        <RepeatIcon className="h-5 w-5" /> 
      </button>
      <CardHeader className="flex justify-between items-center">
        <CardTitle>
          {showCurrent ? "Current Data" : "Predicted Data"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid items-center gap-4">
          {showCurrent ? (
            <div>
              <div className="flex space-x-20 text-center">
                <p className="font-bold">Precipitation :</p>
                <p className="font-light">{formatNumber(weatherData?.precipitation)} mm</p>
              </div>
              <div className="flex space-x-20 text-center">
                <p className="font-bold">Humidity :</p>
                <p className="font-light">{formatNumber(weatherData?.humidity)}%</p>
              </div>
              <div className="flex space-x-20 text-center">
                <p className="font-bold">Temperature :</p>
                <p className="font-light">{formatNumber(weatherData?.temperature)}°C</p>
              </div>
              <div className="flex space-x-20 text-center">
                <p className="font-bold">Wind Speed :</p>
                <p className="font-light">{formatNumber(weatherData?.windSpeed)} m/s</p>
              </div>
              <div className="flex space-x-20 text-center">
                <p className="font-bold">Pressure :</p>
                <p className="font-light">{formatNumber(weatherData?.pressure)} hPa</p>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex space-x-20 text-center">
                <p className="font-bold">Precipitation :</p>
                <p className="font-light">{formatNumber(predictedData?.precipitation)} mm</p>
              </div>
              <div className="flex space-x-20 text-center">
                <p className="font-bold">Humidity :</p>
                <p className="font-light">{formatNumber(predictedData?.humidity)}%</p>
              </div>
              <div className="flex space-x-20 text-center">
                <p className="font-bold">Temperature :</p>
                <p className="font-light">{formatNumber(predictedData?.temperature)}°C</p>
              </div>
              <div className="flex space-x-20 text-center">
                <p className="font-bold">Wind Speed :</p>
                <p className="font-light">{formatNumber(predictedData?.windSpeed)} m/s</p>
              </div>
              <div className="flex space-x-20 text-center">
                <p className="font-bold">Pressure :</p>
                <p className="font-light">{formatNumber(predictedData?.pressure)} hPa</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
