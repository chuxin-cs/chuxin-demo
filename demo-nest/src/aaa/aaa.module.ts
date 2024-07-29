import { Global, Module } from '@nestjs/common';
import { AaaService } from './aaa.service';

@Global()
@Module({
  providers: [AaaService],
  exports: [AaaService],
})
export class AaaModule {}
