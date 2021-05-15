const router = require('express').Router();
const { OK, CREATED, NO_CONTENT } = require('http-status-codes');
const User = require('./user.model');
const userService = require('./user.service');
const wrapAsync = require('../../utils/wrapAsync');

router.route('/').get(
  async (req, res) => {
    const users = await userService.getAll();
    await res.status(OK).json(users.map(User.toResponse));
  }
);

router.route('/:id').get(
  wrapAsync(async (req, res) => {
    const user = await userService.get(req.params.id);
    res.status(OK).send(User.toResponse(user));
  })
);

router.route('/:id').delete(
  wrapAsync(async (req, res) => {
    await userService.remove(req.params.id);
    res.sendStatus(NO_CONTENT);
  })
);

router.route('/').post(
  wrapAsync(async (req, res) => {
    const user = await userService.save(User.fromRequest(req.body));
    res.status(CREATED).send(User.toResponse(user));
  })
);

router.route('/:id').put(
  wrapAsync(async (req, res) => {
    const user = await userService.update(
      req.params.id,
      User.fromRequest(req.body)
    );
    res.status(OK).send(User.toResponse(user));
  })
);

module.exports = router;
