import { Request, Response } from 'express';

const router = require('express').Router();
const { OK, CREATED, NO_CONTENT } = require('http-status-codes');
const User = require('./user.model');
const userService = require('./user.service');
const catchError = require('../../utils/catchError');

router.route('/').get(
  catchError(async (_req: Request, res: Response) => {
    const users = await userService.getAllUser();

    res.status(OK).json(users.map(User.toResponse));
  })
);
router.route('/error').get(() => {
  throw new Error("Oops it's uncaughtException!");
});

router.route('/errorpr').get(() => {
  Promise.reject(Error("Oops it's unhandledRejection!"));
});

router.route('/:id').get(
  catchError(async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await userService.getUser(id);

    res.status(OK).json(User.toResponse(user));
  })
);

router.route('/:id').delete(
  catchError(async (req: Request, res: Response) => {
    const { id } = req.params;
    await userService.removeUser(id);

    res.sendStatus(NO_CONTENT);
  })
);

router.route('/').post(
  catchError(async (req: Request, res: Response) => {
    const { name, login, password } = req.body;

    const user = await userService.createUser({ name, login, password });

    res.status(CREATED).json(User.toResponse(user));
  })
);

router.route('/:id').put(
  catchError(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, login, password } = req.body;

    const user = await userService.updateUser(id, {
      name,
      login,
      password,
    });

    res.status(OK).json(User.toResponse(user));
  })
);

module.exports = router;
