import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
   ) {}

  @Get()
  async getHello() {
    return this.appService.getHello();
  }

}
