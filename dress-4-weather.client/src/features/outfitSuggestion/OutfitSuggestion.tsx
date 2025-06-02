import { OutfitSuggestionCard } from '@/features/outfitSuggestion/components/OutfitSuggestionCard';
import { useOutfitSuggestion } from '@/features/outfitSuggestion/hooks/useOutfitSuggestion';
import { WeatherData } from '@/features/weather/types/weather.types';
import styles from './OutfitSuggestion.module.css';

interface OutfitSuggestionProps {
  title?: string;
  weatherData: WeatherData;
}

export function OutfitSuggestion({
  title,
  weatherData,
}: OutfitSuggestionProps) {
  const { outfit, loading, error } = useOutfitSuggestion(weatherData);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div
          className={`spinner-border ${styles.loadingSpinner}`}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <span className={styles.loadingText}>Loading outfit suggestion...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorIcon}>
          <i className="bi bi-exclamation-triangle-fill"></i>
        </div>
        <div>Error: {error}</div>
      </div>
    );
  }

  if (!outfit) {
    return (
      <div className={styles.emptyContainer}>
        <div className={styles.emptyIcon}>
          <i className="bi bi-question-circle"></i>
        </div>
        <div className={styles.emptyText}>No outfit suggestion available.</div>
      </div>
    );
  }

  return (
    <OutfitSuggestionCard
      title={title || 'Outfit Suggestion'}
      outfit={outfit}
    />
  );
}
