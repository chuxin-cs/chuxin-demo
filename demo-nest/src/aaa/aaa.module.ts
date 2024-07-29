import { Global, Module } from '@nestjs/common';
import { AaaService } from './aaa.service';
import { AaaController } from './aaa.controller';

@Global()
@Module({
  providers: [AaaService],
  controllers: [AaaController],
  exports: [AaaService],
})
export class AaaModule {}
