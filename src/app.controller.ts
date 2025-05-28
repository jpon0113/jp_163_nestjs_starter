import { Controller, Get, Version } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  // @Version('1')
  getHello(): string {
    return 'hello';
  }
}
