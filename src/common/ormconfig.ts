import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = process.env;

export const config = {
  type: 'postgres',
  // name: 'my-connection',
  synchronize: true,
  host: POSTGRES_HOST || 'postgres',
  port: Number(POSTGRES_PORT) || 5432,
  username: POSTGRES_USER || 'postgres',
  password: POSTGRES_PASSWORD || 'ac691n',
  database: POSTGRES_DB || 'postgres',
  logging: true,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectionInterval: 1000,
  entities: [path.join(__dirname, '../**/*.entity.ts')],
  
  migrationsTableName: 'migrations',
  migrations: [path.join(__dirname, '../../database/migrations/*.ts')],
  cli: { migrationsDir: 'src/migrations' },
} as ConnectionOptions;
