const router = require('express').Router();
const { OK, CREATED, NO_CONTENT } = require('http-status-codes');
const User = require('./user.model');
const userService = require('./user.service');
const catchError = require('../../utils/catchError');

router.route('/').get(
  catchError(async (req, res) => {
    const users = await userService.getAll();

    res.status(OK).json(users.map(User.toResponse));
  })
);

router.route('/:id').get(
  catchError(async (req, res) => {
    const { id } = req.params;
    const user = await userService.get(id);

    res.status(OK).json(User.toResponse(user));
  })
);

router.route('/:id').delete(
  catchError(async (req, res) => {
    const { id } = req.params;
    await userService.remove(id);

    res.sendStatus(NO_CONTENT);
  })
);

router.route('/').post(
  catchError(async (req, res) => {
    const { name, login, password } = req.body;

    const user = await userService.create({ name, login, password });

    res.status(CREATED).json(User.toResponse(user));
  })
);

router.route('/:id').put(
  catchError(async (req, res) => {
    const { id } = req.params;
    const { name, login, password } = req.body;

    const user = await userService.update(id, {
      name,
      login,
      password,
    });

    res.status(OK).json(User.toResponse(user));
  })
);

module.exports = router;
