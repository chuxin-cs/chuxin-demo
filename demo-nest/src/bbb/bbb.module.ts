import { Module } from '@nestjs/common';
import { BbbController } from './bbb.controller';
import { BbbService } from './bbb.service';

@Module({
  controllers: [BbbController],
  providers: [BbbService]
})
export class BbbModule {}
