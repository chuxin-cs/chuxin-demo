import { Test, TestingModule } from '@nestjs/testing';
import { BbbController } from './bbb.controller';

describe('BbbController', () => {
  let controller: BbbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BbbController],
    }).compile();

    controller = module.get<BbbController>(BbbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
