import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  calculateHeatIndex,
  calculateWindChillEffect,
  calculateUrbanHeatEffect,
  getHeatwaveDescription,
} from '@/utils/heatWave';

const HeatWaveCalculator: React.FC = () => {
  const [temperature, setTemperature] = useState<number | string>('');
  const [humidity, setHumidity] = useState<number | string>('');
  const [windSpeed, setWindSpeed] = useState<number | string>('');
  const [urbanDensity, setUrbanDensity] = useState<number | string>('');
  const [finalHeatIndex, setFinalHeatIndex] = useState<number | null>(null);
  const [description, setDescription] = useState<string>('');

  const handleCalculate = () => {
    if (temperature === '' || humidity === '' || windSpeed === '' || urbanDensity === '') {
      alert('Please enter all the required inputs.');
      return;
    }

    const temp = Number(temperature);
    const hum = Number(humidity);
    const wind = Number(windSpeed);
    const density = Number(urbanDensity);

    const baseHeatIndex = calculateHeatIndex(temp, hum);
    const windChillEffect = calculateWindChillEffect(baseHeatIndex, wind);
    const urbanHeatEffect = calculateUrbanHeatEffect(baseHeatIndex, density);

    const finalIndex = baseHeatIndex + windChillEffect + urbanHeatEffect;
    setFinalHeatIndex(finalIndex);
    setDescription(getHeatwaveDescription(finalIndex));
  };

  const handleReset = () => {
    setTemperature('');
    setHumidity('');
    setWindSpeed('');
    setUrbanDensity('');
    setFinalHeatIndex(null);
    setDescription('');
  };

  return (
    <div>
      <Card className="relative w-[350px] bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl border-hidden text-green-600">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-emerald-200 text-center mb-4">
            HeatWave Intensity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex flex-col">
              <Label htmlFor="temperature" className="mb-2">
                Current Temperature
              </Label>
              <Input
                type="number"
                id="temperature"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                placeholder="Temperature  (°F)"
                className="p-2 border text-black-200 border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="humidity" className="mb-2">
                Humidity 
              </Label>
              <Input
                type="number"
                id="humidity"
                value={humidity}
                onChange={(e) => setHumidity(e.target.value)}
                placeholder="Humidity (%)"
                className="p-2 border text-black-200 border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="windSpeed" className="mb-2">
                Wind Speed 
              </Label>
              <Input
                type="number"
                id="windSpeed"
                value={windSpeed}
                onChange={(e) => setWindSpeed(e.target.value)}
                placeholder="Wind Speed (mph)"
                className="p-2 border text-black-200 border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="urbanDensity " className="mb-2">
                Urban Density 
              </Label>
              <Input
                type="number"
                id="urbanDensity"
                value={urbanDensity}
                onChange={(e) => setUrbanDensity(e.target.value)}
                placeholder="Urban Density (people per sq km)"
                className="p-2 border text-black-200 border-gray-300 rounded-md"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col justify-center mt-4">
          <Button
            onClick={handleCalculate}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Calculate HeatWave Intensity
          </Button>
          <Button
            onClick={handleReset}
            className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 mt-2"
          >
            Reset
          </Button>
        </CardFooter>
        {finalHeatIndex !== null && (
          <CardContent className="mt-6 bg-blue-100 p-4 text-black-700 rounded-md">
            <h3 className="text-lg font-semibold text-black-700 mb-2">Results</h3>
            <p>Heat Index: {finalHeatIndex.toFixed(2)}°F</p>
            <p>Intensity: {description}</p>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default HeatWaveCalculator;
