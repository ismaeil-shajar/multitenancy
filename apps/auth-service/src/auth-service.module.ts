import { Module } from '@nestjs/common';
import { AuthServiceController } from './auth-service.controller';
import { AuthServiceService } from './auth-service.service';
import { PassportModule } from '@nestjs/passport';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { AuthValidateService } from './auth-validate.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
  AuthModule.register(
    {
    provide: 'AUTH_SERVICE',
    useClass:AuthValidateService
    }
  ,
    { 
    userServiceClientProvider:'User_SERVICE',
    redisUrl:'redis://localhost:6379',
    jwtsecret:jwtConstants.secret
    }
  )],
  controllers: [AuthServiceController],
  providers: [AuthServiceService],
})
export class AuthServiceModule {}
