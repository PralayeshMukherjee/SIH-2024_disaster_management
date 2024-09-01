import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Line } from 'react-chartjs-2';
import { Button } from '@/components/ui/button';
import { Minimize, ChartNoAxesCombined } from 'lucide-react';
import { ActionTooltip } from '@/components/action-tooltip';

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

  return (
    <div>
      {isMinimized ? (
        <div className="flex justify-center items-center cursor-pointer bg-cyan-200 p-1 rounded-md border-slate-950" onClick={() => setIsMinimized(false)}>
        <ActionTooltip label="Danger Level" side="top" align="center">
          <ChartNoAxesCombined size={40} className="text-red-500" />
          </ActionTooltip>
        </div>
      ) : (
        <Card className="relative w-[350px] bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl border-hidden p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Danger Level Graph</h3>
            <div className="flex space-x-2">
              <Button onClick={onReset} className="text-sm py-1 px-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Reset
              </Button>
              <Minimize onClick={() => setIsMinimized(true)} className="cursor-pointer text-gray-500" />
            </div>
          </div>
          <Line data={data} />
        </Card>
      )}
    </div>
  );
};

export default DangerGraph;