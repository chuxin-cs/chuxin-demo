import { Controller, Get, Inject } from '@nestjs/common';
import { BbbService } from './bbb.service';
@Controller('bbb')
export class BbbController {
  @Inject(BbbService)
  private readonly bbbService: BbbService;

  @Get('/findAll')
  public findAll() {
    return this.bbbService.findAll();
  }
}
