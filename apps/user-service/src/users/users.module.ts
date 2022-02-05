import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Organizations } from "./models/organizations.model";
import { Users } from "./models/users.model";

@Module({
  imports: [
    SequelizeModule.forFeature([Users,Organizations]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class UsersModule {}
