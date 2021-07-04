import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const {
  POSTGRES_HOST_DOCKER,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = process.env;

export const config = {
  type: 'postgres',
  
  synchronize: true,
  host: POSTGRES_HOST_DOCKER || 'localhost',
  port: Number(POSTGRES_PORT) || 5433,
  username: POSTGRES_USER || 'postgres',
  password: POSTGRES_PASSWORD || 'postgres',
  database: POSTGRES_DB || 'postgres',
  logging: true,
  // autoReconnect: true,
  migrationsRun: true,
  // reconnectTries: Number.MAX_VALUE,
  // reconnectionInterval: 1000,
  entities: [path.join(__dirname, '../**/*.entity.ts')],
  
  // migrationsTableName: 'migrations',
  migrations: [path.join(__dirname, '../../database/migrations/*.ts')],
  cli: { migrationsDir: 'src/migrations' },
} as ConnectionOptions;
