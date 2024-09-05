import { useState } from 'react';
import DangerGraph from '@/parts/Calc/dangerGraph';
import FireSpreadEstimator from '@/parts/Calc/fSpreadCalc';
import ResourceCalculator from '@/parts/Calc/resCalc';
import LefttPanel from '@/parts/leftPanel';
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
     <div className="flex flex-row justify-between">
      <div className="flex flex-wrap justify-center space-x-10 text-center mt-10">
        <ResourceCalculator />
        <FireSpreadEstimator onEstimate={handleEstimate} />
        {dangerLevels.length > 0 && (
          <DangerGraph dangerLevels={dangerLevels} onReset={resetDangerLevels} />
        )}
        <HeatWaveCalculator />
        <WeatherStationForecast />
      </div>
      <div className="flex-none">
        <LefttPanel />
      </div>
      </div>
    </>
  );
};

export default Analysis;