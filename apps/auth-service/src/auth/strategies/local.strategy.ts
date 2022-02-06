import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { firstValueFrom, Observable } from 'rxjs';
import { UserDto } from '../dto/UserDto';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
 
  constructor(@Inject('AUTH_SERVICE') private authService ) {
    super({
      passReqToCallback: true,
    });
  }

  async validate(  request: Request,username: string, password: string): Promise<any> {

    // const contextId = ContextIdFactory.getByRequest(request);
    // "AuthService" is a request-scoped provider
    // const authService = await this.moduleRef.resolve(AuthServiceService, contextId);

    // const user = await firstValueFrom(authService.validateUser(username, password),{defaultValue:null});
    
    const user = await firstValueFrom(this.authService.validateUser(username, password),{defaultValue:null});
    console.log('username',user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}