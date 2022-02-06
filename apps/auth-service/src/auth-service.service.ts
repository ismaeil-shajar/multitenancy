import { Injectable } from '@nestjs/common';
import { AccessToken } from './dto/accessToken';
import { UserDto } from './dto/UserDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthServiceService {
  constructor(
    private readonly jwtService: JwtService,
  ) {}
  login(user:UserDto):AccessToken {
    const payload = { username: user.firstName,orgId:user.organizationId,sub: user.id};
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
