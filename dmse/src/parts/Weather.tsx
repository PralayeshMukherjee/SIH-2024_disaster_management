import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';

interface WeatherData {
  temperature: number | null;
  humidity: number | null;
  wind_speed: number | null;
}

const WeatherStationForecast: React.FC = () => {
  const [latitude, setLatitude] = useState<number | ''>('');
  const [longitude, setLongitude] = useState<number | ''>('');
  const [parameters, setParameters] = useState<string[]>([]);
  const [date, setDate] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const availableParameters = ['temperature_2m', 'humidity_2m', 'wind_speed_10m'];

  const handleParameterChange = (parameter: string) => {
    setParameters((prev) => {
      if (prev.includes(parameter)) {
        return prev.filter((param) => param !== parameter);
      } else {
        return [...prev, parameter];
      }
    });
  };

  const fetchWeatherData = async () => {
    if (!latitude || !longitude || !date || parameters.length === 0) {
      alert('Please enter coordinates, select a date, and choose at least one parameter.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude,
          longitude,
          hourly: parameters.join(','),
          start_date: date,
          end_date: date,
        },
      });

      const data = response.data.hourly;

      setWeatherData({
        temperature: data.temperature_2m ? data.temperature_2m[0] : null,
        humidity: data.humidity_2m ? data.humidity_2m[0] : null,
        wind_speed: data.wind_speed_10m ? data.wind_speed_10m[0] : null,
      });
    } catch (err) {
      setError('Error fetching weather data. Please try again.');
    }

    setLoading(false);
  };

  const handleReset = () => {
    setLatitude('');
    setLongitude('');
    setParameters([]);
    setDate('');
    setWeatherData(null);
    setError(null);
  };

  return (
    <div>
      <Card className="relative w-[400px] bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl border-hidden text-green-600">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-emerald-200 text-center mb-4">
            Weather Forecast
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex flex-col">
              <Label htmlFor="latitude" className="mb-2">
                Latitude
              </Label>
              <Input
                type="number"
                id="latitude"
                value={latitude}
                onChange={(e) => setLatitude(Number(e.target.value))}
                placeholder="Enter latitude"
                className="p-2 border text-black-200 border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="longitude" className="mb-2">
                Longitude
              </Label>
              <Input
                type="number"
                id="longitude"
                value={longitude}
                onChange={(e) => setLongitude(Number(e.target.value))}
                placeholder="Enter longitude"
                className="p-2 border text-black-200 border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="date" className="mb-2">
                Date
              </Label>
              <Input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="p-2 border text-black-200 border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <Label className="mb-2">Parameters</Label>
              {availableParameters.map((param) => (
                <label key={param} className="inline-flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={parameters.includes(param)}
                    onChange={() => handleParameterChange(param)}
                    className="form-checkbox"
                  />
                  <span>{param.replace('_', ' ')}</span>
                </label>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center mt-4">
          <Button
            onClick={fetchWeatherData}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Fetching Data...' : 'Get Forecast'}
          </Button>
          <Button
            onClick={handleReset}
            className="w-full py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 ml-2"
          >
            Reset
          </Button>
        </CardFooter>
        {error && (
          <CardContent className="mt-4 bg-red-100 p-4 text-red-700 rounded-md">
            <p>{error}</p>
          </CardContent>
        )}
        {weatherData && (
          <CardContent className="mt-6 bg-blue-100 p-4 text-black-700 rounded-md">
            <h3 className="text-lg font-semibold text-black-700 mb-2">Weather Data for {date}</h3>
            <p>Temperature: {weatherData.temperature ? `${weatherData.temperature}°C` : 'N/A'}</p>
            <p>Humidity: {weatherData.humidity ? `${weatherData.humidity}%` : 'N/A'}</p>
            <p>Wind Speed: {weatherData.wind_speed ? `${weatherData.wind_speed} m/s` : 'N/A'}</p>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default WeatherStationForecast;
