import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AuthServiceController {
  constructor(private readonly authService: AuthServiceService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
