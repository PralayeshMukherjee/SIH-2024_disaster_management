import React, { useState } from "react";
import { Pie_Chart } from "@/parts/Pie_Chart";
import { PopoverDemo } from "@/parts/PopoverDemo";
import { Managebar } from "@/parts/manage-bar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { WeatherCard } from "@/parts/weatherCard";

import { CycloneCard } from "@/parts/CycloneCard";
import { EarthquakeCard } from "@/parts/EarthquakeCard";
import { TsunamiCard } from "@/parts/TsunamiCard";
import { FloodCard } from "@/parts/FloodCard";
import { VolcanicCard } from "@/parts/VolcanocCard";


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

  const handleRemoveCard = (id: number) => {
    setCards(cards.filter((card) => card.id !== id));
  };
  return (
<>
  <div className="flex-1 ml-64 ">
    <div className="flex justify-end px-24">
      <div className="flex flex-col " style={{ overflowX: "hidden" }}>
  <div>
    <Managebar />
  </div>
  </div>
  <div className="flex-1 ">
    <div className="flex justify-end py-3">
      <PopoverDemo />
    </div>
    <div className=" pr-48 w-full ">
      <Pie_Chart />
    </div>
    <ScrollArea
      className="flex-1 min-h-screen"
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
            case "Cyclone":
              return (
                <CycloneCard
                  key={card.id}
                  onClose={() => handleRemoveCard(card.id)}
                />
              );
            case "Earthquake":
              return (
                <EarthquakeCard
                  key={card.id}
                  onClose={() => handleRemoveCard(card.id)}
                />
              );
            case "Tsunami":
              return (
                <TsunamiCard
                  key={card.id}
                  onClose={() => handleRemoveCard(card.id)}
                />
              );
            case "Flood":
              return (
                <FloodCard
                  key={card.id}
                  onClose={() => handleRemoveCard(card.id)}
                />
              );
            case "volcanoc_Eroption":
              return (
                <VolcanicCard
                  key={card.id}
                  onClose={() => handleRemoveCard(card.id)}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </ScrollArea>
  </div>
  <div >
    <Managebar />
  </div>
  </div>
  </div>

 </> 
  )
}

export default FuturePages
