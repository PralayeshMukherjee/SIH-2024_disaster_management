import axios from 'axios';
interface HourlyData {
  time: string[];
  temperature_2m: number[];
  relative_humidity_2m: number[];
  precipitation_probability: number[];
  surface_pressure: number[];
  vapour_pressure_deficit: number[];
  wind_speed_10m: number[];
}

export const fetchHourlyWeatherData = async (): Promise<HourlyData> => {
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,surface_pressure,vapour_pressure_deficit,wind_speed_10m`;

  console.log('Fetching data from:', apiUrl);

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    console.log('API Response:', data);

    const { hourly } = data;
    if (!hourly || !Array.isArray(hourly.time)) {
      throw new TypeError("Unexpected data structure");
    }

    return {
      time: hourly.time,
      temperature_2m: hourly.temperature_2m,
      relative_humidity_2m: hourly.relative_humidity_2m,
      precipitation_probability: hourly.precipitation_probability,
      surface_pressure: hourly.surface_pressure,
      vapour_pressure_deficit: hourly.vapour_pressure_deficit,
      wind_speed_10m: hourly.wind_speed_10m,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching hourly weather data:", {
        message: error.message,
        code: error.code,
        response: error.response?.data,
      });
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
