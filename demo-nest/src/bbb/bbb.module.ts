import { Module } from '@nestjs/common';
import { BbbController } from './bbb.controller';
import { BbbService } from './bbb.service';
// import { AaaModule } from 'src/aaa/aaa.module';

@Module({
  imports: [], //AaaModule
  controllers: [BbbController],
  providers: [BbbService],
})
export class BbbModule {}
