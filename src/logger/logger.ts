import { Request } from 'express';

const morgan = require('morgan');
const { format, createLogger, transports } = require('winston');

const { combine, label, colorize, printf } = format;
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
    label({ label: 'right meow!' }),
    format.timestamp({ format: 'YYYY-MMM-DD HH:mm:ss' }),
    format.cli(),
    // json(),
    // format.errors({ stack: true }),
    myFormat
  ),
  // defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new transports.File({
      level: 'error',
      filename: 'error.log',
      prettyPrint: true,
      format: format.combine(format.uncolorize(), format.json(), myFormat),
    }),
    new transports.File({
      level: 'info',
      filename: 'info.log',
      format: format.combine(format.uncolorize(), format.json(), myFormat),
    }),
  ],
  exceptionHandlers: [
    new transports.File({
      level: 'debug',
      filename: 'exceptions.log',
      prettyPrint: true,
      handleExceptions: true,
      humanReadableUnhandledException:true,
      format: format.combine(format.uncolorize(), format.json(), myFormat),
    }),
  ],
});

const myStream = {
  write: (msg: string) => logger.info(msg),
};


module.exports = { logger, myStream };
