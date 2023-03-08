import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Solo deja la data que se esta esperando
      forbidNonWhitelisted: true, // Mostrar un error si se envía información que no se espera en el objeto.
    }),
  );

  await app.listen(3000);
}
bootstrap();
