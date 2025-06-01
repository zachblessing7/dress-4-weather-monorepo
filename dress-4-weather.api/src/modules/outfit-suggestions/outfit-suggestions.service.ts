// src/outfit-suggestions/outfit-suggestions.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OutfitSuggestion } from '@modules/outfit-suggestions/schema/outfit-suggestion.schema';
import { CreateOutfitSuggestionDto } from '@modules/outfit-suggestions/dto/create-outfit-suggestion.dto';

@Injectable()
export class OutfitSuggestionsService {
  private readonly logger = new Logger(OutfitSuggestionsService.name);

  constructor(
    @InjectModel(OutfitSuggestion.name)
    private outfitSuggestionModel: Model<OutfitSuggestion>,
  ) {}

  // Method to find a base outfit suggestion by temperature
  async findOutfitByTemperature(
    temperature: number,
  ): Promise<OutfitSuggestion | null> {
    this.logger.log(`Finding outfit for temperature: ${temperature}°F`);

    // Handle the "Hot & Sunny" case (maxTemp is null)
    if (temperature >= 79) {
      // Adjust '79' if your range boundary is different
      const hotOutfit = await this.outfitSuggestionModel
        .findOne({ name: 'Hot & Sunny' })
        .exec();
      if (hotOutfit) {
        return hotOutfit;
      }
    }

    // Handle the "Arctic Chill" case (minTemp is null)
    if (temperature <= 39) {
      // Adjust '39' if your range boundary is different
      const coldOutfit = await this.outfitSuggestionModel
        .findOne({ name: 'Arctic Chill' })
        .exec();
      if (coldOutfit) {
        return coldOutfit;
      }
    }

    // For all other ranges where both minTemp and maxTemp are defined
    const outfit = await this.outfitSuggestionModel
      .findOne({
        minTemp: { $ne: null, $lte: temperature }, // minTemp is NOT null AND <= temperature
        maxTemp: { $ne: null, $gte: temperature }, // maxTemp is NOT null AND >= temperature
      })
      .exec(); // .exec() returns a full Promise

    if (outfit) {
      this.logger.debug(
        `Found outfit: ${outfit.name} for temperature ${temperature}`,
      );
    } else {
      this.logger.warn(
        `No specific outfit found for temperature: ${temperature}. Check ranges.`,
      );
    }
    return outfit;
  }

  // Method to get all suggestions (useful for initial seeding or admin)
  async findAll(): Promise<OutfitSuggestion[]> {
    return this.outfitSuggestionModel.find().exec();
  }

  // Method to create a new suggestion (optional, if you have an admin UI)
  async create(
    createOutfitSuggestionDto: CreateOutfitSuggestionDto,
  ): Promise<OutfitSuggestion> {
    const createdSuggestion = new this.outfitSuggestionModel(
      createOutfitSuggestionDto,
    );
    return createdSuggestion.save();
  }

  // ... Add more methods as needed (e.g., update, delete)
}
