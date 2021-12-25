import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MongooseConfigService } from './config/mongoose-config-service';
import { SequelizeConfigService } from './config/sequelize-config-service';
import { UserServiceController } from './user-service.controller';
import { UserServiceService } from './user-service.service';
import { Users } from './users/models/users.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UserConfigModule } from './config/user-config.module';

@Module({
   imports: [
    // MongooseModule.forRootAsync({
  //   useClass:MongooseConfigService
  // }),
  SequelizeModule.forRootAsync({
    imports:[UserConfigModule],
    name: 'development',
    useExisting: SequelizeConfigService,
  }),
    // SequelizeModule.forRootAsync({
    //   name: 'development',
    //   useClass:SequelizeConfigService
    // }),
    SequelizeModule.forFeature([Users], 'development')],
  controllers: [UserServiceController],
  providers: [UserServiceService],
})

export class UserServiceModule {}
