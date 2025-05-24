import { Controller, Get, Query, NotFoundException } from '@nestjs/common';
import { OutfitSuggestionService } from './outfit-suggestion.service';
import { CreateOutfitSuggestionDto } from './dto/create-outfit-suggestion.dto';
import { UpdateOutfitSuggestionDto } from './dto/update-outfit-suggestion.dto';

@Controller('outfit-suggestion')
export class OutfitSuggestionController {
  constructor(private readonly outfitSuggestionService: OutfitSuggestionService) {}

  @Get()
  async find(@Query('temp') temp?: number) {
    if (temp !== undefined){
      const outfit = await this.outfitSuggestionService.getOutfitByTemperature(temp);
      if (!outfit){
        throw new NotFoundException('No outfit suggestion found for this temp')
      }
      return outfit;
    }
    return this.outfitSuggestionService.getAllOutfitSuggestions();
  }
}
