import { Injectable, Inject } from '@nestjs/common';
import { OutfitSuggestion } from './entities/outfit-suggestion.entity';
import { Redis } from 'ioredis';

@Injectable()
export class OutfitSuggestionService {
  constructor(@Inject('REDIS_CLIENT') private readonly redisClient: Redis) {}

  async getOutfitByTemperature(temp: number): Promise<OutfitSuggestion | null> {
    const rangeKeys = await this.redisClient.zrevrangebyscore(
      'outfit:temperature',
      temp,
      '-inf',
      'LIMIT',
      0,
      1
    );

    if (rangeKeys.length === 0){
      return null;
    }

    const data = await this.redisClient.get(rangeKeys[0]);
    return data ? JSON.parse(data) : null;
  }
  
  async getAllOutfitSuggestions(): Promise<OutfitSuggestion[]> {
    const rangeKeys = await this.redisClient.zrange('outfit:temperature', 0, -1);
  
    const outfits = await Promise.all(
      rangeKeys.map(async (key) => {
        const data = await this.redisClient.get(key);
        return data ? JSON.parse(data) : null;
      }),
    );
  
    return outfits.filter((outfit) => outfit !== null);
  }
}
