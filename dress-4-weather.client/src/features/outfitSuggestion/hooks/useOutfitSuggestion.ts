import { useState, useEffect } from 'react';
import { OutfitSuggestion as OutfitSuggestionType } from '@/features/outfitSuggestion/types/outfitSuggestion.types';
import { WeatherData } from '@/features/weather/types/weather.types';

export function useOutfitSuggestion(weatherData: WeatherData) {
  const [outfit, setOutfit] = useState<OutfitSuggestionType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (weatherData) {
      const temp = weatherData.temp;
      const baseUrl = import.meta.env.BACKEND_API_BASE_URL || 'http://localhost:3000';
      setLoading(true);
      fetch(`${baseUrl}/api/outfit-suggestion?temp=${temp}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch outfit suggestion');
          }
          return response.json();
        })
        .then((data) => {
          setOutfit(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setOutfit(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [weatherData]);

  return { outfit, loading, error };
}