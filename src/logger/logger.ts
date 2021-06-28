import { Request } from 'express';

const morgan = require('morgan');
const { format, createLogger, transports } = require('winston');

const { combine, colorize, printf } = format;
interface IPrint {
  message: string;
  timestamp: string;
  stack: string;
}

const myFormat = printf(
  ({ message, timestamp, stack }: IPrint) => `${timestamp} ${stack || message}`
);

morgan.token('body', (req: Request) => JSON.stringify(req.body));
morgan.token('query', (req: Request) => JSON.stringify(req.query));

const logger = createLogger({
  format: combine(
    colorize(),
    format.timestamp({ format: 'YYYY-MMM-DD HH:mm:ss' }),
    format.cli(),
    myFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      level: 'info',
      filename: './logs/info.log',
      format: format.combine(format.uncolorize(), format.json(), myFormat),
    }),
  ],
});

const myStream = {
  write: (msg: string) => logger.info(msg),
};

module.exports = { logger, myStream };
