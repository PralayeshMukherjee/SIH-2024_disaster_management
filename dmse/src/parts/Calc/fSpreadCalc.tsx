import { useState } from 'react';
import { estimateFireSpread, VegetationType } from '@/utils/fSpreadCalc';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Wind } from 'lucide-react';
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
      <Card className="relative w-[350px]  bg-slate-900/30  shadow-2xl rounded-2xl border-[2px] border-cyan-200/50 text-blue-200   ">
        <CardHeader className='flex flex-row items-center justify-center gap-3 text-xl font-bold text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
        '>
            
          <CardTitle className="text-xl font-bold text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Fire Spread Estimator  
        
          </CardTitle>
              <Wind />
        </CardHeader>
        <CardContent>
          
          <div className="grid gap-4">
            <div className="flex flex-col">
              <div className="flex flex-col bg-slate-500/10 p-2 rounded-md">
              <Label htmlFor="windSpeed" className="mb-2">
                Wind Speed (km/h)
              </Label>
              <Input
                type="number"
                id="windSpeed"
                value={windSpeed}
                onChange={(e) => setWindSpeed(Number(e.target.value))}
                placeholder="Enter wind speed"
                className="p-2 border text-black-200 border-gray-800/10 rounded-md bg-zinc-700/50 w-full"
              />
              </div>
            </div>
           
            <div className="flex flex-col">
              <div className="flex flex-col bg-slate-500/10 p-2 rounded-md">
              <Label htmlFor="vegetationType" className="mb-2">
                Vegetation Type
              </Label>
              <select
                id="vegetationType"
                value={vegetationType}
                onChange={(e) => setVegetationType(e.target.value as VegetationType)}
                className="p-2 border text-black-200 border-gray-800/10 rounded-md bg-zinc-700/50 w-full"
              >
                <option value="Grassland">Grassland</option>
                <option value="Forest">Forest</option>
                <option value="Shrubland">Shrubland</option>
              </select>
            </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col bg-slate-500/10 p-2 rounded-md">
              <Label htmlFor="humidity" className="mb-2">
                Humidity (%)
              </Label>
              <Input
                type="number"
                id="humidity"
                value={humidity}
                onChange={(e) => setHumidity(Number(e.target.value))}
                placeholder="Enter humidity"
               
               className="p-2 border text-black-200 border-gray-800/10 rounded-md bg-zinc-700/50 w-full"
              />
               </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between mt-4">
          <Button onClick={calculateFireSpread} className="w-full py-2 bg-red-400 text-white rounded-md hover:bg-red-500">
            Estimate Fire Spread
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FireSpreadEstimator;