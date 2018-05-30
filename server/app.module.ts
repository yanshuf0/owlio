import { Module } from '@nestjs/common';
import { join } from 'path';
import { AngularUniversalModule } from './angular-universal';

const BROWSER_DIR = join(process.cwd(), 'dist/browser');

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: BROWSER_DIR,
      bundle: require('./../dist/server/main'),
    }),
  ],
})
export class ApplicationModule {}
