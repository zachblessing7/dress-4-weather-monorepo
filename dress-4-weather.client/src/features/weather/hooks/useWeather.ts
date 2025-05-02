import { useState } from 'react';
import axios from 'axios';
import {
  GroupedWeatherData,
  WeatherDataDto,
} from '@/features/weather/types/weather.types';
import { groupWeatherForecasts } from '../utils/weatherGrouper';

export function useWeather() {
  const [weatherData, setWeatherData] = useState<GroupedWeatherData[] | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get<{ list: WeatherDataDto[] }>(
        'http://localhost:3000/api/weather',
        {
          params: {
            lat: 40.7128,
            lon: -74.006,
          },
        }
      );

      if (response.data.list?.length > 0) {
        const groupedData = await groupWeatherForecasts(response.data.list);
        setWeatherData(groupedData);
      }
    } catch (e: any) {
      setError(e.message || 'Failed to fetch weather data');
      console.error('Weather API Call Error:', e);
    } finally {
      setLoading(false);
    }
  };

  return { weatherData, loading, error, fetchWeatherData };
}
