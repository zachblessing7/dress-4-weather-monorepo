import {
  WeatherData,
  GroupedWeatherData,
  WeatherDataDto,
} from '@/features/weather/types/weather.types';
import { mapWeatherData } from './weatherMappers';

function calculateAverageWeather(forecasts: WeatherDataDto[]): WeatherDataDto {
  if (forecasts.length === 0) {
    throw new Error(
      'Cannot calculate average weather data of empty forecast array'
    );
  }
  const aggregate = forecasts.reduce(
    (acc, curr) => ({
      temp: acc.temp + curr.main.temp,
      temp_min: Math.min(acc.temp_min, curr.main.temp_min),
      temp_max: Math.max(acc.temp_max, curr.main.temp_max),
      humidity: acc.humidity + curr.main.temp,
    }),
    {
      temp: 0,
      temp_min: Infinity,
      temp_max: 0,
      humidity: 0,
    }
  );

  const count = forecasts.length;
  return {
    dt_txt: forecasts[0].dt_txt,
    main: {
      temp: aggregate.temp / count,
      temp_min: aggregate.temp_min,
      temp_max: aggregate.temp_max,
      humidity: Math.round(aggregate.humidity / count),
    },
    weather: forecasts[0].weather,
  };
}

export async function groupWeatherForecasts(
  weatherList: WeatherDataDto[]
): Promise<GroupedWeatherData[]> {
  const dailyForecasts = weatherList.reduce<Record<string, WeatherDataDto[]>>(
    (acc, forecast) => {
      const date = forecast.dt_txt.split(' ')[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(forecast);
      return acc;
    },
    {}
  );

  return Promise.all(
    Object.entries(dailyForecasts).map(async ([date, forecasts]) => {
      const amForecasts = forecasts.slice(0, 3);
      const pmForecasts = forecasts.slice(-3);

      const amAverage = calculateAverageWeather(amForecasts);
      const pmAverage = calculateAverageWeather(pmForecasts);

      return {
        date,
        amForeCast: await mapWeatherData(amAverage),
        pmForeCast: await mapWeatherData(pmAverage),
      };
    })
  );
}
