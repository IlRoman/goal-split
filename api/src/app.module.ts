import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'node:path';
import { DatabaseModule } from './modules/database/database.module';
import { HelloModule } from './modules/hello/hello.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(__dirname, '../../.env'),
    }),
    DatabaseModule,
    HelloModule,
  ],
})
export class AppModule {}
