import * as dotenv from 'dotenv';
dotenv.config(); // Ensure environment variables are loaded before anything else

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Adjust this to your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(3001,'0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
