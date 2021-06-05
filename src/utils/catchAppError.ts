import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/HttpException';

const { INTERNAL_SERVER_ERROR, getStatusText } = require('http-status-codes');
const { logger } = require('../logger/logger');

process.on('unhandledRejection', (err: HttpException) => {
  logger.info(err.stack);
  process.exit(1);
});

/**
 * Wrapper for catch app.js errors
 * @param {Error} err - Express catch error
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Function} return catch status code
 */
const catchAppError = (
  err: HttpException,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.status) {
    res.status(err.status).send(err.message);
  } else {
    logger.error(err.stack);
    res
      .status(INTERNAL_SERVER_ERROR)
      .send(getStatusText(INTERNAL_SERVER_ERROR));
  }
  next();
};

module.exports = catchAppError;
