import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { UserServiceModule } from './user-service.module';

async function bootstrap() {
  const app = await NestFactory.create(UserServiceModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport:Transport.REDIS,
    options:{
      url:'redis://127.0.0.1:6379'
    },
  });

  await app.startAllMicroservices();
  await app.listen(3003);
}
bootstrap();
