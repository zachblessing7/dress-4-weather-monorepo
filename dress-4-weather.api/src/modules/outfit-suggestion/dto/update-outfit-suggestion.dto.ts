import { PartialType } from '@nestjs/mapped-types';
import { CreateOutfitSuggestionDto } from './create-outfit-suggestion.dto';

export class UpdateOutfitSuggestionDto extends PartialType(CreateOutfitSuggestionDto) {}
