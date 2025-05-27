import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configServcie = app.get(ConfigService);
  const port = configServcie.get<number>('PORT', 3000);
  await app.listen(port);
}
bootstrap();
