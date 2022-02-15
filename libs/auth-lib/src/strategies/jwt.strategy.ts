import {  Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Policy } from '../auth/casl/policy';
import { Payload } from './payload';



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject('JWTSECRET') private jwtsecrit) {
    
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtsecrit,
      passReqToCallback: true
    });
  }


  async validate( request: Request,payload: Payload) {
    const user={ userId: payload.sub, username: payload.username,roles:payload.roles,policies:payload.policies }
    return user;
  }
}
