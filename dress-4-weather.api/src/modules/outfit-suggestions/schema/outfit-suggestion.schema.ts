import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// sub-schema for weatherSpecific.items
@Schema()
export class WeatherSpecificItem {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: string; //e.g., "upperBody", "footwear", "accessories"
}
export const WeatherSpecificItemSchema =
  SchemaFactory.createForClass(WeatherSpecificItem);

// sub-schema for weatherSpecific array elements
@Schema()
export class WeatherSpecificRule {
  @Prop({ required: true })
  condition: string; // e.g., "rain", "sunny", "windy", "cloudy"

  @Prop({ type: [WeatherSpecificItemSchema], default: [] })
  items: WeatherSpecificItem[];
}
export const WeatherSpecificRuleSchema =
  SchemaFactory.createForClass(WeatherSpecificRule);

// Main Outfit Suggestion Schema
@Schema({ collection: 'outfit_suggestions' })
export class OutfitSuggestion extends Document {
  @Prop({ required: true })
  name: string; // e.g., "Artic Chill", "Hot & Sunny"

  @Prop({ type: Number, default: null })
  minTemp: number;

  @Prop({ type: Number, default: null })
  maxTemp: number;

  @Prop([String])
  headwear: string[];

  @Prop([String])
  upperBody: string[];

  @Prop([String])
  lowerBody: string[];

  @Prop([String])
  footwear: string[];

  @Prop([String])
  accessories: string[];

  @Prop({ type: [WeatherSpecificRuleSchema], default: [] })
  weatherSpecific: WeatherSpecificRule[];
}
export const OutfitSuggestionSchema =
  SchemaFactory.createForClass(OutfitSuggestion);
