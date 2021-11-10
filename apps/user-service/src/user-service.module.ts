import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserServiceController } from './user-service.controller';
import { UserServiceService } from './user-service.service';
import { Users } from './users/models/users.model';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'ismaeil',
    password: 'root',
    database: 'test',
    autoLoadModels: true,
    synchronize: true,
    models: [Users],
  }),SequelizeModule.forFeature([Users])],
  controllers: [UserServiceController],
  providers: [UserServiceService],
})

export class UserServiceModule {}
