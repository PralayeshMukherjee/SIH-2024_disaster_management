import { useState } from 'react';
import DangerGraph from '@/parts/Calc/dangerGraph';
import FireSpreadEstimator from '@/parts/Calc/fSpreadCalc';
import ResourceCalculator from '@/parts/Calc/resCalc';

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
      <div className="flex flex-wrap justify-center space-x-10 text-center mt-10">
        <ResourceCalculator />
        <FireSpreadEstimator onEstimate={handleEstimate} />
        {dangerLevels.length > 0 && (
          <DangerGraph dangerLevels={dangerLevels} onReset={resetDangerLevels} />
        )}
      </div>
    </>
  );
};

export default Analysis;