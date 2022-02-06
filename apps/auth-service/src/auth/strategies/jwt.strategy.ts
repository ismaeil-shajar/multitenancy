import {  Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../constants';



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
      passReqToCallback: true
    });
  }


  async validate( request: Request,payload: any) {
    const user={ userId: payload.sub, username: payload.username,roles:['admin'] }
    return user;
  }
}