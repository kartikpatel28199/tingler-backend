import { NestFactory } from '@nestjs/core';
import { AppConfigService } from './app-config/app-config.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfigService = app.get(AppConfigService);
  const { port } = appConfigService;
  await app.listen(port);
}
bootstrap();
