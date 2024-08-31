import React, { useState, useRef, useEffect } from "react";
import { GripVertical, FileBox,  Maximize2Icon, MinusIcon,Droplets, CloudMoonRain,Earth,Waves,ChevronUp,Zap  } from "lucide-react";
import { ActionTooltip } from "@/components/action-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export const Managebar: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const toolbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const toolbar = toolbarRef.current;
      if (toolbar) {
        const { innerWidth, innerHeight } = window;
        const toolbarRect = toolbar.getBoundingClientRect();
        setPosition((prevPosition) => ({
          x: Math.min(Math.max(prevPosition.x, 0), innerWidth - toolbarRect.width),
          y: Math.min(Math.max(prevPosition.y, 0), innerHeight - toolbarRect.height),
        }));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!(e.target as HTMLElement).dataset.draggable) return;

    const toolbar = toolbarRef.current;
    if (!toolbar) return;

    const shiftX = e.clientX - toolbar.getBoundingClientRect().left;
    const shiftY = e.clientY - toolbar.getBoundingClientRect().top;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const toolbarRect = toolbar.getBoundingClientRect();
      let newX = moveEvent.clientX - shiftX;
      let newY = moveEvent.clientY - shiftY;

      newX = Math.min(Math.max(newX, 0), innerWidth - toolbarRect.width);
      newY = Math.min(Math.max(newY, 0), innerHeight - toolbarRect.height);

      setPosition({ x: newX, y: newY });
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, cardType: string) => {
    e.dataTransfer.setData("text/plain", cardType);
  };


  return (
    <div
      ref={toolbarRef}
      className={`fixed z-50 bg-cyan-900 dark:bg-[#1E1F22] shadow-lg p-3 rounded-lg transition-all duration-300 cursor-grab`}
      style={{ top: position.y, left: position.x }}
      onMouseDown={handleMouseDown}
    >
      {isMinimized ? (
        <div className="flex items-center">
          <FileBox
            className="h-8 w-8 text-white cursor-pointer"
            data-draggable="true"
            onClick={() => setIsMinimized(false)}
          />
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-2">
            <GripVertical
              className="text-white cursor-pointer"
              data-draggable="true"
            />
            <button onClick={() => setIsMinimized(!isMinimized)} className="text-white">
              {isMinimized ? <Maximize2Icon className="h-5 w-5" /> : <MinusIcon className="h-5 w-5" />}
            </button>
          </div>

          <Separator className="h-[2px] bg-cyan-900 dark:bg-zinc-700 rounded-md w-10 mx-auto mb-4" />

          <ScrollArea className="flex-1">
            <div className="space-y-4 mt-4">
              <ActionTooltip label="Weather Card" side="top" align="center">
                <div
                  className="bg-cyan-700 p-2 rounded-md hover:bg-cyan-600 transition-all border-[2px] border-black cursor-pointer"
                  draggable
                  onDragStart={(e) => handleDragStart(e, "weather-card")}
                >
                  <Droplets className="h-8 w-8 text-white mx-auto" />
                </div>
              </ActionTooltip>
              <ActionTooltip label="Cyclone" side="top" align="center">
                <div
                  className="bg-cyan-700 p-2 rounded-md hover:bg-cyan-600 transition-all border-[2px] border-black cursor-pointer"
                  draggable
                  onDragStart={(e) => handleDragStart(e, "Cyclone")}
                >
                  <Zap className="h-8 w-8 text-white mx-auto" />
                </div>
              </ActionTooltip>

              <ActionTooltip label="Earthquake" side="top" align="center">
                <div
                  className="bg-cyan-700 p-2 rounded-md hover:bg-cyan-600 transition-all border-[2px] border-black cursor-pointer"
                  draggable
                  onDragStart={(e) => handleDragStart(e, "Earthquake")}
                >
                  <Earth className="h-8 w-8 text-white mx-auto" />
                </div>
              </ActionTooltip>

              <ActionTooltip label="Tsunami" side="top" align="center">
                <div
                  className="bg-cyan-700 p-2 rounded-md hover:bg-cyan-600 transition-all border-[2px] border-black cursor-pointer"
                  draggable
                  onDragStart={(e) => handleDragStart(e, "Tsunami")}
                >
                  < CloudMoonRain className="h-8 w-8 text-white mx-auto" />
                </div>
               </ActionTooltip>

               <ActionTooltip label="Tsunami" side="top" align="center">
                <div
                  className="bg-cyan-700 p-2 rounded-md hover:bg-cyan-600 transition-all border-[2px] border-black cursor-pointer"
                  draggable
                  onDragStart={(e) => handleDragStart(e, "Flood")}
                >
                  < Waves className="h-8 w-8 text-white mx-auto" />
                </div>
               </ActionTooltip>

               
               <ActionTooltip label="Volcanoc_Eroption" side="top" align="center">
                <div
                  className="bg-cyan-700 p-2 rounded-md hover:bg-cyan-600 transition-all border-[2px] border-black cursor-pointer"
                  draggable
                  onDragStart={(e) => handleDragStart(e, "olcanoc_Eroption")}
                >
                  < ChevronUp  className="h-8 w-8 text-white mx-auto" />
                </div>
               </ActionTooltip>
              
            </div>
          </ScrollArea>
        </>
      )}
    </div>
  );
};
