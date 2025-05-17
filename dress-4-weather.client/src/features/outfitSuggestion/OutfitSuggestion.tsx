import { OutfitSuggestionCard } from '@/features/outfitSuggestion/components/OutfitSuggestionCard';
import { useOutfitSuggestion } from '@/features/outfitSuggestion/hooks/useOutfitSuggestion';
import { WeatherData } from '@/features/weather/types/weather.types';

interface OutfitSuggestionProps {
    title?: string;
  weatherData: WeatherData;
}

export function OutfitSuggestion({ title, weatherData }: OutfitSuggestionProps) {
  const { outfit, loading, error } = useOutfitSuggestion(weatherData);

  if (loading) {
    return <div>Loading outfit suggestion...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!outfit) {
    return <div>No outfit suggestion available.</div>;
  }

  return <OutfitSuggestionCard title={title || 'Outfit Suggestion'} outfit={outfit} />;
}