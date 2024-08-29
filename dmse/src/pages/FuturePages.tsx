import React, { useState } from "react";
import { Pie_Chart } from "@/parts/Pie_Chart";
import { PopoverDemo } from "@/parts/PopoverDemo";
import { Cards } from "@/parts/Cards";
import { Managebar } from "@/parts/manage-bar";
import { ScrollArea } from "@/components/ui/scroll-area";

const FuturePages: React.FC = () => {
  const [cards, setCards] = useState<string[]>(["default"]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const label = e.dataTransfer.getData("text/plain"); 
      if (label) {
      setCards((prevCards) => [...prevCards, label]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); 
  };

  const handleRemoveCard = (index: number) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  return (
    <>
      <Managebar />
      <div  className="flex justify-end px-24 "           >
        <PopoverDemo  />
        </div>
        <div className="w-11/12">
        <Pie_Chart />
        </div>
      <ScrollArea className="flex-1 w-full min-h-screen" onDrop={handleDrop} onDragOver={handleDragOver}>
       
       
        <div className="flex flex-wrap justify-center space-x-10 text-center mt-10">
          {cards.map((_, index) => (
            <Cards key={index} onClose={() => handleRemoveCard(index)} />
          ))}
     </div>
   
      </ScrollArea>
    </>
  );
};

export default FuturePages;
