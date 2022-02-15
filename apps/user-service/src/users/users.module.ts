import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Organizations } from "./models/organizations.model";
import { Users } from "./models/users.model";
import { UsersController } from "./controller/user.controller";
import { UsersService } from "./services/users.service";
import { PrivilegeService } from "./services/privilege.service";
import { PrivilegeController } from "./controller/privilege.controller";
import { PrivilegeGroup } from "./models/privilegeGroup.model";
import { GroupUser } from "./models/groupUser.model";

@Module({
  imports: [
    SequelizeModule.forFeature([Users,Organizations,PrivilegeGroup,GroupUser]),
  ],
  controllers: [UsersController,PrivilegeController],
  providers: [UsersService,PrivilegeService],
  exports: [],
})
export class UsersModule {}
