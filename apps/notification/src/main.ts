import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NotificationModule } from './notification.module';

async function bootstrap() {
  const app = await NestFactory.create(NotificationModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport:Transport.REDIS,
    options:{
      url:'redis://127.0.0.1:6379'
    },
  });
  await app.startAllMicroservices();
  await app.listen(3002);
  Logger.log("serviuce start in port ",3002)
}
bootstrap();
