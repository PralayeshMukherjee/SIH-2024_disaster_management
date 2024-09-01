import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { differenceInDays } from 'date-fns';

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
      <Card className="relative w-[350px] bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl border-hidden ">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-emerald-200 text-center mb-4">
            Disaster Resource Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex flex-col">
              <Label htmlFor="population" className="mb-2">
                Affected Population
              </Label>
              <Input
                type="number"
                id="population"
                value={population}
                onChange={(e) => setPopulation(Number(e.target.value))}
                placeholder="Enter the number of affected people"
                className="p-2 border text-black-200 border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <Label className="mb-2">Start Date of Disaster</Label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="p-2 border text-black-200 border-gray-300 rounded-md"
                placeholderText="Select start date"
              />
            </div>
            <div className="flex flex-col">
              <Label className="mb-2">End Date of Disaster</Label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="p-2 border text-black-200 border-gray-300 rounded-md"
                placeholderText="Select end date"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center mt-4">
          <Button onClick={calculateResources} className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Calculate Resources
          </Button>
        </CardFooter>
        {resourceEstimation && (
          <CardContent className="mt-6 bg-blue-100 p-4 text-black-700 rounded-md">
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