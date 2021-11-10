import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MongooseConfigService } from './config/mongoose-config-service';
import { SequelizeConfigService } from './config/sequelize-config-service';
import { UserServiceController } from './user-service.controller';
import { UserServiceService } from './user-service.service';
import { Users } from './users/models/users.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRootAsync({
    useClass:MongooseConfigService
  }),
    SequelizeModule.forRootAsync({
      useClass:SequelizeConfigService
    }),SequelizeModule.forFeature([Users])],
  controllers: [UserServiceController],
  providers: [UserServiceService],
})

export class UserServiceModule {}
