const { NOT_FOUND } = require('http-status-codes');
/**
 * Wrapper for catch router errors
 * @param {Function} fn for Express middleware function
 * @returns {Function} return catch status code
 */
const catchError = (fn) => (req, res, next) =>
  fn(req, res, next).catch((err) => {
    res.status(NOT_FOUND).send(err.message);
  });

module.exports = catchError;
