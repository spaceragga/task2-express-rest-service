// import { json } from "express";
const morgan = require('morgan');
const { format, createLogger, transports } = require('winston');

const { combine, label, colorize } = format;

const myFormat = format.printf(
  ({ message, timestamp, stack }: any) => `${timestamp} ${stack || message}`
);

morgan.token('body', (req: { body: any; }) => JSON.stringify(req.body));
morgan.token('query', (req: { query: any; }) => JSON.stringify(req.query));

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
      filename: 'error.log',
      level: 'error',
      prettyPrint: true,
      format: format.combine(format.uncolorize(), format.json(),     myFormat
      ),
    }),
    new transports.File({
      filename: 'info.log',
      level: 'info',
      format: format.combine(format.uncolorize(), format.json(),     myFormat
      ),
    }),
  ],
});

const myStream = {
  write: (msg: string) => logger.info(msg)
}

module.exports = { logger, myStream };
