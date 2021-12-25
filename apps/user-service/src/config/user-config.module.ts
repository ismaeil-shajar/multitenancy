import { Module } from '@nestjs/common';
import { SequelizeConfigService } from './sequelize-config-service';

@Module({
  providers: [SequelizeConfigService],
  exports:[SequelizeConfigService]
})

export class UserConfigModule {}
