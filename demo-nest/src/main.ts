import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';
import { setupSwagger } from './setupSwagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 中间件
  app.use(function (req: Request, res: Response, next: NextFunction) {
    console.log('app.use');
    next();
    console.log('1111');
  });

  app.use(function (req: Request, res: Response, next: NextFunction) {
    console.log('app1.use');
    next();
    console.log('222');
  });

  // swagger
  setupSwagger(app);

  await app.listen(3000);
}
bootstrap();
