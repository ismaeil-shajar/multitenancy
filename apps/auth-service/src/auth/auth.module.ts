/*
https://docs.nestjs.com/modules
*/

import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';


@Module({})
export class AuthModule {
  static register(validationService,options?:{jwtsecret:string,
    userServiceClientProvider:string,
    redisUrl:string

  }): DynamicModule {
    return {
      module: AuthModule,
      imports:[ 
        PassportModule,
        ClientsModule.register([
          {
            name: options.userServiceClientProvider,
            transport: Transport.REDIS,
            options: {
              url: options.redisUrl,
            },
          },
          ]),        
        JwtModule.register({
          secret: options?options.jwtsecret:"secretKey",
          signOptions: { expiresIn: '6000s' },
          })
      ],
      providers: [
        {
        provide:'JWTSECRET',
        useValue:options?options.jwtsecret:"secretKey"
        }
        ,validationService ,LocalStrategy, JwtStrategy],
      exports: [LocalStrategy, JwtStrategy,JwtModule],
    };
  }
}
