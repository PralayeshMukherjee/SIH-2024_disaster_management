import { useState } from 'react';
import DangerGraph from '@/parts/Calc/dangerGraph';
import FireSpreadEstimator from '@/parts/Calc/fSpreadCalc';
import ResourceCalculator from '@/parts/Calc/resCalc';

import HeatWaveCalculator from '@/parts/Calc/heatWave';
import WeatherStationForecast from '@/parts/Weather';

const Analysis = () => {
  const [dangerLevels, setDangerLevels] = useState<number[]>([]);

  const handleEstimate = (rate: number) => {
    setDangerLevels((prev) => [...prev, rate]);
  };

  const resetDangerLevels = () => {
    setDangerLevels([]);
  };

  return (
    <>
     <div className=" ">
      <div className="flex flex-row justify-center space-x-5 text-center mt-10 space-y-7">
        <ResourceCalculator />
        <FireSpreadEstimator onEstimate={handleEstimate} />
   
        <HeatWaveCalculator />

        
        </div>
           <div className='ml-10' >
               {dangerLevels.length > 0 && (
          <DangerGraph dangerLevels={dangerLevels} onReset={resetDangerLevels}  />
        )}
        </div>      
        <div className='p-9'>
         
        <WeatherStationForecast  />
      
      </div>
      </div>
    </>
  );
};

export default Analysis;