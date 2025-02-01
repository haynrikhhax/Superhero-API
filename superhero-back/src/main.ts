import { ValidationPipe, ValidationPipeOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const validationOptions: ValidationPipeOptions = {
  whitelist: true,
  forbidNonWhitelisted: true,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Allowing cors from every port since vite mgiht start on different ports on different machines,
  // or I could add { origin: 'http://localhost:5173' } as option to enable cors function but in this case
  // i need to make sure that i always run the client on 5173 port
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe(validationOptions));
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
