import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import * as os from 'node:os';

const logger = new Logger('MongoDB');

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const username = encodeURIComponent(
          config.getOrThrow<string>('MONGO_INITDB_ROOT_USERNAME'),
        );
        const password = encodeURIComponent(
          config.getOrThrow<string>('MONGO_INITDB_ROOT_PASSWORD'),
        );

        return {
          uri: `mongodb://${username}:${password}@127.0.0.1:27017/goal-split?authSource=admin`,
          runtimeAdapters: { os },
          onConnectionCreate: (connection: Connection) => {
            connection.on('connected', () => {
              logger.log('connected');
            });
          },
        };
      },
    }),
  ],
})
export class DatabaseModule {}
