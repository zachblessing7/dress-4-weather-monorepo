import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class CreateWeatherSpecificItemDto {
  @IsString()
  name: string;

  @IsString()
  category: string;
}

class CreateWeatherSpecificRuleDto {
  @IsString()
  condition: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateWeatherSpecificItemDto)
  items: CreateWeatherSpecificItemDto[];
}

export class CreateOutfitSuggestionDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsOptional() // Use IsOptional because it can be null
  minTemp?: number | null;

  @IsNumber()
  @IsOptional()
  maxTemp?: number | null;

  @IsArray()
  @IsString({ each: true })
  headwear: string[];

  @IsArray()
  @IsString({ each: true })
  upperBody: string[];

  @IsArray()
  @IsString({ each: true })
  lowerBody: string[];

  @IsArray()
  @IsString({ each: true })
  footwear: string[];

  @IsArray()
  @IsString({ each: true })
  accessories: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateWeatherSpecificRuleDto)
  weatherSpecific: CreateWeatherSpecificRuleDto[];
}
