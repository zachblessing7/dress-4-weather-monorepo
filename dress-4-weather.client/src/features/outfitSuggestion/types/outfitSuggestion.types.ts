export interface WeatherSpecificItem {
  name: string;
  category: string;
}

export interface WeatherSpecificCondition {
  condition: string;
  items: WeatherSpecificItem[];
}

export interface OutfitSuggestion {
  name: string;
  headwear?: string[];
  upperBody: string[];
  lowerBody: string[];
  footwear: string[];
  accessories: string[];
  weatherSpecific: WeatherSpecificCondition[];
}
