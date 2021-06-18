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
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER || 'postgres',
  password: POSTGRES_PASSWORD || 'ac691n',
  database: POSTGRES_DB || 'postgres',
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectionInterval: 2000,
} as ConnectionOptions;
