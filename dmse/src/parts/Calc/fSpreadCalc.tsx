import { useState } from 'react';
import { estimateFireSpread, VegetationType } from '@/utils/fSpreadCalc';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FireSpreadEstimatorProps {
  onEstimate: (rate: number) => void;
}

const FireSpreadEstimator: React.FC<FireSpreadEstimatorProps> = ({ onEstimate }) => {
  const [windSpeed, setWindSpeed] = useState<number>(0);
  const [vegetationType, setVegetationType] = useState<VegetationType>('Grassland');
  const [humidity, setHumidity] = useState<number>(50);

  const calculateFireSpread = () => {
    const spreadRate = estimateFireSpread({ windSpeed, vegetationType, humidity });
    onEstimate(spreadRate); 
  };

  return (
    <div>
      <Card className="relative w-[350px] bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl border-hidden text-green-600 ">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-emerald-200 text-center mb-4">
            Fire Spread Estimator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex flex-col">
              <Label htmlFor="windSpeed" className="mb-2">
                Wind Speed (km/h)
              </Label>
              <Input
                type="number"
                id="windSpeed"
                value={windSpeed}
                onChange={(e) => setWindSpeed(Number(e.target.value))}
                placeholder="Enter wind speed"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <Label htmlFor="vegetationType" className="mb-2">
                Vegetation Type
              </Label>
              <select
                id="vegetationType"
                value={vegetationType}
                onChange={(e) => setVegetationType(e.target.value as VegetationType)}
                className="p-2 border border-gray-300 rounded-md"
              >
                <option value="Grassland">Grassland</option>
                <option value="Forest">Forest</option>
                <option value="Shrubland">Shrubland</option>
              </select>
            </div>

            <div className="flex flex-col">
              <Label htmlFor="humidity" className="mb-2">
                Humidity (%)
              </Label>
              <Input
                type="number"
                id="humidity"
                value={humidity}
                onChange={(e) => setHumidity(Number(e.target.value))}
                placeholder="Enter humidity"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between mt-4">
          <Button onClick={calculateFireSpread} className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Estimate Fire Spread
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FireSpreadEstimator;