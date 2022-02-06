import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Organizations } from "./models/organizations.model";
import { Users } from "./models/users.model";
import { UsersController } from "./user.controller";
import { UsersService } from "./users.service";

@Module({
  imports: [
    SequelizeModule.forFeature([Users,Organizations]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [],
})
export class UsersModule {}
