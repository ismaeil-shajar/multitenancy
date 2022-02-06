import { Module } from '@nestjs/common';
import { AuthServiceController } from './auth-service.controller';
import { AuthServiceService } from './auth-service.service';
import { AuthValidateService } from './auth-validate.service';
import { jwtConstants } from './constants';
import { AuthLibModule } from 'libs/auth-lib/src';
@Module({
  imports: [
    AuthLibModule.register(
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
