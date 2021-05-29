import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/HttpException';
const { NOT_FOUND } = require('http-status-codes');
/**
 * Wrapper for catch router errors
 * @param {Function} fn for Express middleware function
 * @returns {Function} return catch status code
 */
const catchError = (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
  fn(req, res, next).catch((err: HttpException) => {
    res.status(NOT_FOUND).send(err.message);
  });

module.exports = catchError;
