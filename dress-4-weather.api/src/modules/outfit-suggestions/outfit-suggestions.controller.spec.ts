import { Test, TestingModule } from '@nestjs/testing';
import { OutfitSuggestionsController } from './outfit-suggestions.controller';

describe('OutfitSuggestionsController', () => {
  let controller: OutfitSuggestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OutfitSuggestionsController],
    }).compile();

    controller = module.get<OutfitSuggestionsController>(OutfitSuggestionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
