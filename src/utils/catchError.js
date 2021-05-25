const { NOT_FOUND } = require('http-status-codes');

const catchError = (fn) => (req, res, next) =>
  fn(req, res, next).catch((err) => {
    res.status(NOT_FOUND).send(err.message);
  });

module.exports = catchError;
