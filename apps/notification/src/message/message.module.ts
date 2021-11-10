import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { MessageSchema, MessageSchemaSchema } from './schemas/message.schema';
@Module({
  imports: [MongooseModule.forFeature([{name:MessageSchema.name,schema:MessageSchemaSchema}])],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
