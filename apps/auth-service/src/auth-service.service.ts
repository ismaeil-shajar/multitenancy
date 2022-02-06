import { Injectable } from '@nestjs/common';
import { AccessToken } from './auth/dto/accessToken';
import { UserDto } from './auth/dto/UserDto';

@Injectable()
export class AuthServiceService {

  login(user:UserDto):UserDto {
    console.log(user);
    return user;
  }
}
