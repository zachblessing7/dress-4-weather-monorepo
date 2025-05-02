import {
  WeatherData,
  WeatherDataDto,
} from '@/features/weather/types/weather.types';

export async function mapWeatherData(
  data: WeatherDataDto
): Promise<WeatherData> {
  return {
    date: formatDate(data.dt_txt),
    temp: data.main.temp,
    temp_min: data.main.temp_min,
    temp_max: data.main.temp_max,
    humidity: data.main.humidity,
    description: data.weather.map((w) => ({
      main: w.main,
      description: w.description,
    })),
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
  });
}
