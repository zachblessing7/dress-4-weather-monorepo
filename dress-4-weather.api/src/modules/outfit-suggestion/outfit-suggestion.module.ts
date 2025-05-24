import { Module } from '@nestjs/common';
import { OutfitSuggestionService } from './outfit-suggestion.service';
import { OutfitSuggestionController } from './outfit-suggestion.controller';

@Module({
  controllers: [OutfitSuggestionController],
  providers: [OutfitSuggestionService],
})
export class OutfitSuggestionModule {}
