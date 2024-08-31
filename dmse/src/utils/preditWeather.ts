export function predictNextDayWeather(currentData: {
    temperature: number;
    humidity: number;
    precipitation: number;
    windSpeed: number;
    pressure: number;
  }): {
    temperature: number;
    humidity: number;
    precipitation: number;
    windSpeed: number;
    pressure: number;
  } {  
    //Not Final Logic Only For prototype 
    const deltaTemp = (Math.random() * 2 - 1) * 2; 
    const deltaHumidity = (Math.random() * 2 - 1) * 5; 
    const deltaPrecipitation = (Math.random() * 2 - 1) * 1;
    const deltaWindSpeed = (Math.random() * 2 - 1) * 2; 
    const deltaPressure = (Math.random() * 2 - 1) * 3;
  
    return {
      temperature: currentData.temperature + deltaTemp,
      humidity: currentData.humidity + deltaHumidity,
      precipitation: currentData.precipitation + deltaPrecipitation,
      windSpeed: currentData.windSpeed + deltaWindSpeed,
      pressure: currentData.pressure + deltaPressure,
    };
  }
  