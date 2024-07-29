import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app) {
  const config = new DocumentBuilder()
    .setTitle('nest')
    .setDescription('nest swagger')
    .setVersion('1.0.0')
    .addTag('test')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
}
