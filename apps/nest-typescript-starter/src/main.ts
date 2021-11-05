import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport:Transport.REDIS,
    options:{
      url:'redis://127.0.0.1:6379'
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
  Logger.log("Start main service in port 3000")
}
bootstrap();
