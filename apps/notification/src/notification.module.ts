import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/test'),
  MessageModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
