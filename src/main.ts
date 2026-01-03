import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    exceptionFactory: (errors: ValidationError[]) => {
    console.error('Validation Errors:', errors); // 👈 Log the errors
    return new BadRequestException(errors);
  },
  }))
  app.enableCors({
    origin: ['https://care-pack-two.vercel.app','http://localhost:3000', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
  })
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
