import { Controller, Get, Inject } from '@nestjs/common';
import { BbbService } from './bbb.service';
@Controller('bbb')
export class BbbController {
  @Inject(BbbService)
  private readonly bbbService: BbbService;

  @Get('/findAll')
  public findAll() {
    console.log('bbb .......');
    return this.bbbService.findAll();
  }
}
