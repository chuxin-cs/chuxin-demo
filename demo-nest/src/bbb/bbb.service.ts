import { Injectable } from '@nestjs/common';
import { AaaService } from 'src/aaa/aaa.service';

@Injectable()
export class BbbService {
  constructor(private aaaService: AaaService) {}

  findAll() {
    return (
      `当前是b方法中调用到 a中的 findAll 方法 ` + this.aaaService.findAll()
    );
  }
}
