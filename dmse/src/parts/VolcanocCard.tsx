
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircleIcon } from "lucide-react"; 


import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';
interface VolcanicCardProps {
  onClose: () => void; 
}

export function VolcanicCard({ onClose }: VolcanicCardProps) {
  return (
    <Card className="relative w-[400px] bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl border-hidden text-emerald-200">
      <button
        className="absolute top-2 right-2 p-1 text-gray-500 hover:text-red-700"
        onClick={onClose}
      >
        <XCircleIcon className="h-5 w-5" />
      </button>
      <CardHeader>
        <CardTitle>Prediction</CardTitle>
        <CardTitle>(Volcanic eroption)</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid items-center gap-2 py-2">
            <div className="flex space-x-20 text-center">
              <p className="font-bold">Origin:</p>
              <p className="font-light">Uttarakhant</p>
            </div>
            <div className="flex space-x-20 text-center">
              <p className="font-bold">Date :</p>
              <p className="font-light">16-11-2024</p>
            </div>
            <div className="flex space-x-20 text-center">
              <p className="font-bold">VEI:</p>
              <p className="font-light">4.5km^3</p>
            </div>
          
          <div className="flex space-x-20 text-center">
              <p className="font-bold">possiblity (%):</p>
              <p className="font-light ">88%</p>
          </div>
        </div>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }} className="flex justify-end bg-slate-50  rounded-sm">
      <Gauge width={100} height={100} value={88}  />

    </Stack>
        </form>
      </CardContent>
      
    </Card>

    
  );
}