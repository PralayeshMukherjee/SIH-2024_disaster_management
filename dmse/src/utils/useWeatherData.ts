export async function fetchWeatherData(): Promise<{ precipitation: number; humidity: number }> {
    try {
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=relative_humidity_2m,precipitation'); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return {
        precipitation: data.precipitation ?? 0,
        humidity: data.relative_humidity_2m ?? 0
      };
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return { precipitation: 0, humidity: 0 };
    }
  }
  