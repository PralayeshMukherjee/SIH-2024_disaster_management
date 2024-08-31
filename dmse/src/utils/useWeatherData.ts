export async function fetchWeatherData(): Promise<{
  precipitation: number;
  humidity: number;
  temperature: number;
  windSpeed: number;
  pressure: number;
}> {
  try {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation,relative_humidity_2m,windspeed_10m,surface_pressure');
    
    if (!response.ok) {
      throw new Error(`Network response was not ok. Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      precipitation: data.hourly?.precipitation?.[0] ?? 0,
      humidity: data.hourly?.relative_humidity_2m?.[0] ?? 0,
      temperature: data.hourly?.temperature_2m?.[0] ?? 0,
      windSpeed: data.hourly?.windspeed_10m?.[0] ?? 0,
      pressure: data.hourly?.surface_pressure?.[0] ?? 0,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return { precipitation: 0, humidity: 0, temperature: 0, windSpeed: 0, pressure: 0 };
  }
}
