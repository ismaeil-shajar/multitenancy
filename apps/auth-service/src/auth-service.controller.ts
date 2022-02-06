import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

import { AuthServiceService } from './auth-service.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';


@Controller()
export class AuthServiceController {
  constructor(private readonly authService: AuthServiceService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('hello')
  @UseGuards(JwtAuthGuard)
  getHello(@Request() req){
    console.log("hello",req.user);
    return "Hello";
  }
}
