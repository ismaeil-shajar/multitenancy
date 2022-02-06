import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';

import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
 
  constructor(@Inject('AUTH_SERVICE') private authService ) {
    super({
      passReqToCallback: true,
    });
  }

  async validate(  request: Request,username: string, password: string): Promise<any> {
    const user = await firstValueFrom(this.authService.validateUser(username, password),{defaultValue:null});
    console.log('username',user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}