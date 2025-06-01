// src/outfit-suggestions/outfit-suggestions.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // Import MongooseModule
import { OutfitSuggestionsService } from './outfit-suggestions.service';
import { OutfitSuggestionsController } from './outfit-suggestions.controller';
import {
  OutfitSuggestion,
  OutfitSuggestionSchema,
  WeatherSpecificItem, // Import sub-schemas
  WeatherSpecificItemSchema,
  WeatherSpecificRule,
  WeatherSpecificRuleSchema,
} from '@modules/outfit-suggestions/schema/outfit-suggestion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OutfitSuggestion.name, schema: OutfitSuggestionSchema },
    ]),
  ],
  controllers: [OutfitSuggestionsController],
  providers: [OutfitSuggestionsService],
  exports: [OutfitSuggestionsService],
})
export class OutfitSuggestionsModule {}
