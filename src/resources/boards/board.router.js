const router = require('express').Router();
const { OK, CREATED, NO_CONTENT } = require('http-status-codes');
const Board = require('./board.model');
const boardsRepo = require('./board.service');
const wrapAsync = require('../../utils/wrapAsync');

router.route('/').get(
  wrapAsync(async (req, res) => {
    const users = await boardsRepo.getAll();
    await res.status(OK).json(users.map(Board.toResponse));
  })
);

router.route('/:id').get(
  wrapAsync(async (req, res) => {
    const user = await boardsRepo.get(req.params.id);
    res.status(OK).send(Board.toResponse(user));
  })
);

router.route('/:id').delete(
  wrapAsync(async (req, res) => {
    await boardsRepo.remove(req.params.id);
    res.sendStatus(NO_CONTENT);
  })
);

router.route('/').post(
  wrapAsync(async (req, res) => {
    const user = await boardsRepo.save(Board.fromRequest(req.body));
    res.status(CREATED).send(Board.toResponse(user));
  })
);

router.route('/:id').put(
  wrapAsync(async (req, res) => {
    const user = await boardsRepo.update(
      req.params.id,
      Board.fromRequest(req.body)
    );
    res.status(OK).send(Board.toResponse(user));
  })
);

module.exports = router;
