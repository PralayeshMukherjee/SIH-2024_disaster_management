import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { differenceInDays } from 'date-fns';
import { CalendarDays } from 'lucide-react';

const ResourceCalculator = () => {
  const [population, setPopulation] = useState(0);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [resourceEstimation, setResourceEstimation] = useState<any>(null);

  const calculateResources = () => {
    if (!startDate || !endDate) {
      alert('Please select both start and end dates.');
      return;
    }

    const duration = differenceInDays(endDate, startDate) + 1;
    if (duration <= 0) {
      alert('End date should be after start date.');
      return;
    }

    const waterPerPersonPerDay = 3;
    const foodPerPersonPerDay = 2;
    const medicalSupplyPerPersonPerDay = 0.1;

    const totalWater = population * duration * waterPerPersonPerDay;
    const totalFood = population * duration * foodPerPersonPerDay;
    const totalMedicalSupplies = population * duration * medicalSupplyPerPersonPerDay;

    setResourceEstimation({
      water: totalWater,
      food: totalFood,
      medicalSupplies: totalMedicalSupplies,
      duration,
    });
  };

  return (
    <div>
      <Card className="relative w-[350px]  bg-slate-900/30  shadow-2xl rounded-2xl border-[2px] border-cyan-200/50 text-blue-200 mt-7 ">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Disaster Resource Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex flex-col bg-slate-500/10 p-2 rounded-md">
              <Label htmlFor="population" className="mb-2">
                Affected Population
              </Label>
              
              <Input
                type="number"
                id="population"
                value={population}
                onChange={(e) => setPopulation(Number(e.target.value))}
                placeholder="Enter the number of affected people"
                className="p-2 border text-black-200 border-gray-800/10 rounded-md bg-zinc-700/50 w-full"
              />
            </div>
            <div className="flex flex-col bg-slate-500/10 p-2 rounded-md">
              <Label className="mb-2">Start Date of Disaster</Label>
              <div className='flex flex-row  items-center gap-4 bg-zinc-700/50'>
                
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="p-2 border text-black-200 border-gray-800/10 rounded-md bg-zinc-700/50  w-full"
                placeholderText="Select start date"
              />
              <CalendarDays className="ml-2" />
             </div>
            </div>
            <div className="flex flex-col bg-slate-500/10 p-2 rounded-md ">
              <Label className="mb-2">End Date of Disaster</Label>
              <div className='flex flex-row  items-center gap-4 bg-zinc-700/50 '>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="p-2 border text-black-200 border-gray-800/10 rounded-md bg-zinc-700/50 w-full"
                placeholderText="Select end date"
              />
               <CalendarDays className="ml-2" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center mt-4 ">
          <Button onClick={calculateResources} className="w-full py-2 bg-cyan-900 text-white rounded-md hover:bg-blue-600">
            Calculate Resources
          </Button>
        </CardFooter>
        {resourceEstimation && (
          <CardContent className="mt-6 bg-cyan-200 p-4 text-cyan-600 rounded-md">
            <h3 className="text-lg font-semibold text-black-700 mb-2">
              Resource Estimation for {resourceEstimation.duration} Days:
            </h3>
            <p>Water Needed: {resourceEstimation.water} liters</p>
            <p>Food Needed: {resourceEstimation.food} kg</p>
            <p>Medical Supplies Needed: {resourceEstimation.medicalSupplies} units</p>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default ResourceCalculator;