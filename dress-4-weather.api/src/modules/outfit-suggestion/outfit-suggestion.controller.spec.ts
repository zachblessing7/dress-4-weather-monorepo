import { Test, TestingModule } from '@nestjs/testing';
import { OutfitSuggestionController } from './outfit-suggestion.controller';
import { OutfitSuggestionService } from './outfit-suggestion.service';

describe('OutfitSuggestionController', () => {
  let controller: OutfitSuggestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OutfitSuggestionController],
      providers: [OutfitSuggestionService],
    }).compile();

    controller = module.get<OutfitSuggestionController>(OutfitSuggestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
