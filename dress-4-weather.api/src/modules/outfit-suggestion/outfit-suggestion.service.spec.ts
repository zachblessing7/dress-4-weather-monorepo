import { Test, TestingModule } from '@nestjs/testing';
import { OutfitSuggestionService } from './outfit-suggestion.service';

describe('OutfitSuggestionService', () => {
  let service: OutfitSuggestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OutfitSuggestionService],
    }).compile();

    service = module.get<OutfitSuggestionService>(OutfitSuggestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
