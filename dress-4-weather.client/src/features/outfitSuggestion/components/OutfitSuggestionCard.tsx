import { OutfitSuggestion } from '@/features/outfitSuggestion/types/outfitSuggestion.types';

interface OutfitSuggestionCardProps {
  title: string;
  outfit: OutfitSuggestion;
}

export function OutfitSuggestionCard({
  title,
  outfit,
}: OutfitSuggestionCardProps) {
  return (
    <div className="card text-center m-2">
      <div className="card-body">
        <h3 className="card-header fw-bold">{title}</h3>
        <div className="card-text">
          <h5>{outfit.name}</h5>
          <p>Head Wear: {outfit.headwear?.join(', ') || 'None'}</p>
          <p>Upper Body: {outfit.upperBody.join(', ')}</p>
          <p>Lower Body: {outfit.lowerBody.join(', ')}</p>
          <p>Footwear: {outfit.footwear.join(', ')}</p>
          <p>Accessories: {outfit.accessories.join(', ')}</p>

          <div className="mt-3">
            <h6>Weather-Specific Items:</h6>
            {outfit.weatherSpecific?.map((weatherCondition, index) => (
              <div key={index} className="mb-2">
                <strong>{weatherCondition.condition}:</strong>
                <ul className="list-unstyled ms-3">
                  {weatherCondition.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.name} ({item.category})
                    </li>
                  ))}
                </ul>
              </div>
            )) || <p>No weather-specific items</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
