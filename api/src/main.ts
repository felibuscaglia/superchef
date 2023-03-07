import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config();

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: process.env.UI_URL,
    },
  });
  await app.listen(process.env.PORT);
};

bootstrap();
