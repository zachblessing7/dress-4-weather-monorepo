import { Test, TestingModule } from '@nestjs/testing';
import { OutfitSuggestionsService } from './outfit-suggestions.service';

describe('OutfitSuggestionsService', () => {
  let service: OutfitSuggestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OutfitSuggestionsService],
    }).compile();

    service = module.get<OutfitSuggestionsService>(OutfitSuggestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
