import { NestFactory } from '@nestjs/core';
import { ApiKeyGuard } from './api-key/api-key.guard';
import { ApiKeyService } from './api-key/api-key.service';
import { AppModule } from './app.module';
require('dotenv').config();

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const apiKeyService = app.get(ApiKeyService);
  app.useGlobalGuards(new ApiKeyGuard(apiKeyService));
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT);
};

bootstrap();
