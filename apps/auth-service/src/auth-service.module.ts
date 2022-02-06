import { Module } from '@nestjs/common';
import { AuthServiceController } from './auth-service.controller';
import { AuthServiceService } from './auth-service.service';
import { PassportModule } from '@nestjs/passport';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { AuthValidateService } from './auth/auth-validate.service';

@Module({
  imports: [PassportModule,
    ClientsModule.register([
      {
        name: 'User_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
        },
      },
    ])
  ],
  controllers: [AuthServiceController],
  providers: [AuthServiceService,
    {provide:'AUTH_SERVICE',
    useClass:AuthValidateService
  },
    LocalStrategy, JwtStrategy],
})
export class AuthServiceModule {}
