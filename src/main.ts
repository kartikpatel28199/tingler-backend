import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppConfigService } from './app-config/app-config.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfigService = app.get(AppConfigService);
  const { port } = appConfigService;

  const config = new DocumentBuilder()
    .setTitle('Tingler')
    .setDescription('The tingler API description')
    .setVersion('1.0')
    .addTag('Tingler')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api-doc', app, document);

  await app.listen(port);
}
bootstrap();
