import { Controller, Get, Post, Request } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';

@Controller()
export class AuthServiceController {
  constructor(private readonly authService: AuthServiceService) {}

  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
