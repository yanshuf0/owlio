import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { enableProdMode } from '@angular/core';
import * as cluster from 'express-cluster';

enableProdMode();

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  await cluster((w) => app.listen(3000), {});
}
bootstrap();
