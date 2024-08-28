import { ActionTooltip } from "@/components/action-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ChartSplineIcon, BarChart3Icon, LineChartIcon, PieChartIcon } from "lucide-react";
import React from "react";

export const Managebar: React.FC = () => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, label: string) => {
    e.dataTransfer.setData("text/plain", label); 
  };

  return (
    <div className="fixed right-0 top-[60px] h-full w-[60px] flex flex-col items-center text-primary dark:bg-[#1E1F22] bg-cyan-900 py-3 shadow-lg">
      <Separator className="h-[2px] bg-cyan-900 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      
      <ScrollArea className="flex-1 w-full">
        <div className="space-y-4 mt-4">

          <ActionTooltip label="Test" side="top" align="center">
            <div
              className="bg-cyan-700 p-2 rounded-md hover:bg-cyan-600 transition-all border-[2px] border-black cursor-pointer"
              draggable
              onDragStart={(e) => handleDragStart(e, "Test")}
            >
              <ChartSplineIcon className="h-8 w-8 text-white mx-auto" />
            </div>
          </ActionTooltip>

          <ActionTooltip label="Bar Chart" side="top" align="center">
            <div
              className="bg-cyan-700 p-2 rounded-md hover:bg-cyan-600 transition-all border-[2px] border-black cursor-pointer"
              draggable
              onDragStart={(e) => handleDragStart(e, "Bar Chart")}
            >
              <BarChart3Icon className="h-8 w-8 text-white mx-auto" />
            </div>
          </ActionTooltip>

          <ActionTooltip label="Line Chart" side="top" align="center">
            <div
              className="bg-cyan-700 p-2 rounded-md hover:bg-cyan-600 transition-all border-[2px] border-black cursor-pointer"
              draggable
              onDragStart={(e) => handleDragStart(e, "Line Chart")}
            >
              <LineChartIcon className="h-8 w-8 text-white mx-auto" />
            </div>
          </ActionTooltip>

          <ActionTooltip label="Pie Chart" side="top" align="center">
            <div
              className="bg-cyan-700 p-2 rounded-md hover:bg-cyan-600 transition-all border-[2px] border-black cursor-pointer"
              draggable
              onDragStart={(e) => handleDragStart(e, "Pie Chart")}
            >
              <PieChartIcon className="h-8 w-8 text-white mx-auto" />
            </div>
          </ActionTooltip>
          
        </div>
      </ScrollArea>
    </div>
  );
};
