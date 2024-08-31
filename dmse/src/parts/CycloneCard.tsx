
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircleIcon } from "lucide-react"; 
import { Possiblity } from "./Possibility";

interface CycloneCardProps {
  onClose: () => void; 
}

export function CycloneCard({ onClose }: CycloneCardProps) {
  return (
    <Card className="relative w-[350px] bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl border-hidden text-emerald-200">
      <button
        className="absolute top-2 right-2 p-1 text-gray-500 hover:text-red-700"
        onClick={onClose}
      >
        <XCircleIcon className="h-5 w-5" />
      </button>
      <CardHeader>
        <CardTitle>Prediction</CardTitle>
        <CardTitle>Cyclone</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid items-center gap-2">
            <div className="flex space-x-20 text-center">
              <p className="font-bold">State :</p>
              <p className="font-light">West bengal</p>
            </div>
            <div className="flex space-x-20 text-center">
              <p className="font-bold">Speed:</p>
              <p className="font-light">300 km/sec</p>
            </div>
            <div className="flex space-x-20 text-center">
              <p className="font-bold">possiblity</p>
           
            </div>
          </div>
        </form>
      </CardContent>
     
      <Possiblity/>   
            
    </Card>
    
  );
}
