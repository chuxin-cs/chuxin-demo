import { Controller, Get, Inject } from '@nestjs/common';
import { AaaService } from './aaa.service';

@Controller('aaa')
export class AaaController {
  @Inject(AaaService)
  private readonly aaaService: AaaService;

  @Get('/findAll')
  public findAll() {
    console.log('aaa .......');
    return this.aaaService.findAll();
  }
}
