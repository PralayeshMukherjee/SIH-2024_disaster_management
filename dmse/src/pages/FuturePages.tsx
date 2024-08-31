import React, { useState } from "react";
import { Pie_Chart } from "@/parts/Pie_Chart";
import { PopoverDemo } from "@/parts/PopoverDemo";
import { Managebar } from "@/parts/manage-bar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { WeatherCard } from "@/parts/weatherCard";
import { Cards } from "@/parts/Cards"; 


const FuturePages: React.FC = () => {
  const [cards, setCards] = useState<{ type: string; id: number }[]>([]);
  const [nextId, setNextId] = useState(0); 

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("text/plain");
    if (type) {
      setCards((prevCards) => [...prevCards, { type, id: nextId }]);
      setNextId((prevId) => prevId + 1); 
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

<<<<<<< HEAD

  const handleRemoveCard = (index: number) => {
    setCards(cards.filter((_, i) => i !== index));
  
=======
  const handleRemoveCard = (id: number) => {
    setCards(cards.filter((card) => card.id !== id));
>>>>>>> 8268c6343f66b72e69761a94dae71bdf82906c5a
  };
 
  return (
    <>
      <Managebar />
<<<<<<< HEAD
      <div  className="flex justify-end px-24 "           >
        <PopoverDemo  />
        </div>
        <div className="w-11/12">
        < Pie_Chart/>
        </div>
     
      <ScrollArea className="flex-1 w-full min-h-screen" onDrop={handleDrop} onDragOver={handleDragOver} >
       
       
        <div className="flex flex-wrap justify-center space-x-10 text-center mt-10">
          {cards.map((_, index) => (
            <Cards key={index} onClose={() => handleRemoveCard(index)} />
          ))}
     </div>

=======
      <div className="flex justify-end px-24">
        <PopoverDemo />
      </div>
      <div className="w-11/12">
        <Pie_Chart />
      </div>
      <ScrollArea
        className="flex-1 w-full min-h-screen"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="flex flex-wrap justify-center space-x-10 text-center mt-10">
          {cards.map((card) => {
            switch (card.type) {
              case "weather-card":
                return (
                  <WeatherCard
                    key={card.id}
                    onClose={() => handleRemoveCard(card.id)}
                  />
                );
              case "cards":
                return (
                  <Cards
                    key={card.id}
                    onClose={() => handleRemoveCard(card.id)}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
>>>>>>> 8268c6343f66b72e69761a94dae71bdf82906c5a
      </ScrollArea>
    </>
  );
};

export default FuturePages;
