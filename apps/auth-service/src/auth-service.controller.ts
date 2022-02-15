
import { ActionEnum, CheckPolicies, JwtAuthGuard, LocalAuthGuard, PoliciesGuard, Role, Roles } from '@app/auth-lib';
import { RolesGuard } from '@app/auth-lib';
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

import { AuthServiceService } from './auth-service.service';


@Controller()
export class AuthServiceController {
  constructor(private readonly authService: AuthServiceService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('hello')
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard,RolesGuard,PoliciesGuard)
  @CheckPolicies({action:[ActionEnum.Read],resources:'hello'})
  getHello(@Request() req){
    return "Hello";
  }
}
