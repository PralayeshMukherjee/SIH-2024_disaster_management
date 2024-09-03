import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Line } from 'react-chartjs-2';
import { Minimize, ChartNetworkIcon } from 'lucide-react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface DangerGraphProps {
  dangerLevels: number[];
  onReset: () => void;
}

const DangerGraph: React.FC<DangerGraphProps> = ({ dangerLevels, onReset }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const data = {
    labels: dangerLevels.map((_, index) => `Time ${index + 1}`),
    datasets: [
      {
        label: 'Danger Level Over Time',
        data: dangerLevels,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };
  useEffect(() => {
    return () => {
      Chart.getChart('danger-level-chart')?.destroy();
    };
  }, []);

  return (
    <div>
      {isMinimized ? (
        <div className="flex justify-center items-center cursor-pointer bg-cyan-400 p-1 border-black rounded-md" onClick={() => setIsMinimized(false)}>
          <ChartNetworkIcon size={40} className="text-emerald-950" />
        </div>
      ) : (
        <Card className="relative w-[350px] bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl border-hidden p-4 text-green-300 ">
          <div className="flex justify-between items-center  mb-4">
            <h3 className="text-xl font-bold">Danger Level Graph</h3>
            <div className="flex space-x-2">
              <button onClick={onReset} className="text-sm py-1 px-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Reset
              </button>
              <Minimize onClick={() => setIsMinimized(true)} className="cursor-pointer text-gray-500" />
            </div>
          </div>
          <Line 
            data={data} 
            id="danger-level-chart" 
          />
        </Card>
      )}
    </div>
  );
};

export default DangerGraph;
