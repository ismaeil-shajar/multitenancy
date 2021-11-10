import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';
import { MongooseConfigService } from './config/mongoose-config-service';
@Module({
  imports: [MongooseModule.forRootAsync({
    useClass:MongooseConfigService
  }),
  MessageModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
