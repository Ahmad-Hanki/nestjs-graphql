import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const enabledCors = [
  'http://localhost:3000',
  'http://localhost:4000',
  'https://studio.apollographql.com',
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // ✅ Enable CORS

  app.enableCors({
    origin: enabledCors,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
