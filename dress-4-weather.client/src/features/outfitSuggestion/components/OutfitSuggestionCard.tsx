import { OutfitSuggestion } from '@/features/outfitSuggestion/types/outfitSuggestion.types';
import styles from './OutfitSuggestionCard.module.css';

interface OutfitSuggestionCardProps {
  title: string;
  outfit: OutfitSuggestion;
}

export function OutfitSuggestionCard({
  title,
  outfit,
}: OutfitSuggestionCardProps) {
  return (
    <div className={`${styles.outfitCard} card text-center m-2`}>
      <div className={`${styles.outfitCardBody} card-body`}>
        <h3 className={`${styles.outfitCardHeader} card-header fw-bold`}>
          {title}
        </h3>
        <div className="card-text">
          <h5 className={styles.outfitName}>{outfit.name}</h5>
          <p className={styles.outfitItem}>
            <strong>Head Wear:</strong> {outfit.headwear?.join(', ') || 'None'}
          </p>
          <p className={styles.outfitItem}>
            <strong>Upper Body:</strong> {outfit.upperBody.join(', ')}
          </p>
          <p className={styles.outfitItem}>
            <strong>Lower Body:</strong> {outfit.lowerBody.join(', ')}
          </p>
          <p className={styles.outfitItem}>
            <strong>Footwear:</strong> {outfit.footwear.join(', ')}
          </p>
          <p className={styles.outfitItem}>
            <strong>Accessories:</strong> {outfit.accessories.join(', ')}
          </p>

          <div className={styles.weatherSpecificSection}>
            <h6 className={styles.weatherSpecificTitle}>
              Weather-Specific Items:
            </h6>
            {outfit.weatherSpecific?.map((weatherCondition, index) => (
              <div key={index} className={styles.weatherCondition}>
                <div className={styles.conditionTitle}>
                  {weatherCondition.condition}:
                </div>
                <ul className={styles.weatherItemsList}>
                  {weatherCondition.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.name}
                      <span className={styles.categoryBadge}>
                        ({item.category})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )) || (
              <p className={styles.noWeatherItems}>No weather-specific items</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
