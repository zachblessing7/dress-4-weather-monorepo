// src/outfit-suggestions/outfit-suggestions.controller.ts
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { OutfitSuggestionsService } from '@modules/outfit-suggestions/outfit-suggestions.service';
import { OutfitSuggestion } from '@modules/outfit-suggestions/schema/outfit-suggestion.schema';
import { CreateOutfitSuggestionDto } from '@modules/outfit-suggestions/dto/create-outfit-suggestion.dto';
import { Response } from 'express'; // Import Response from express for manual status codes

@Controller('outfit-suggestions') // Base route for this controller
export class OutfitSuggestionsController {
  constructor(
    private readonly outfitSuggestionsService: OutfitSuggestionsService,
  ) {}

  @Get('by-temperature/:temperature')
  async getOutfitByTemperature(
    @Param('temperature', ParseIntPipe) temperature: number,
    @Res() res: Response, // Inject Response object for more control over status
  ): Promise<void> {
    const outfit =
      await this.outfitSuggestionsService.findOutfitByTemperature(temperature);

    if (!outfit) {
      res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'No outfit suggestion found for this temperature.' });
    } else {
      res.status(HttpStatus.OK).json(outfit);
    }
  }

  @Get()
  async getAllOutfits(): Promise<OutfitSuggestion[]> {
    return this.outfitSuggestionsService.findAll();
  }

  @Post()
  async createOutfit(
    @Body() createOutfitDto: CreateOutfitSuggestionDto,
  ): Promise<OutfitSuggestion> {
    return this.outfitSuggestionsService.create(createOutfitDto);
  }

  // ... Add more API endpoints as needed (e.g., /:id for specific outfit, /update)
}
