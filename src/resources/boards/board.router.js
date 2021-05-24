const router = require('express').Router();
const { OK, CREATED, NO_CONTENT } = require('http-status-codes');
const boardsRepo = require('./board.service');
const catchError = require('../../utils/catchError');

router.route('/').get(
  catchError(async (req, res) => {
    const boards = await boardsRepo.getAll();

    res
      .status(OK)
      .json(boards);
  })
);

router.route('/:id').get(
  catchError(async (req, res) => {
    const { id } = req.params;

    const board = await boardsRepo.get(id);

    res
      .status(OK)
      .json(board);
  })
);

router.route('/:id').delete(
  catchError(async (req, res) => {
    await boardsRepo.remove(req.params.id);

    res
      .sendStatus(NO_CONTENT);
  })
);

router.route('/').post(
  catchError(async (req, res) => {
    const board = await boardsRepo.create(req.body);

    res
      .status(CREATED)
      .json(board);
  })
);

router.route('/:id').put(
  catchError(async (req, res) => {
    const { id } = req.params;

    const board = await boardsRepo.update(id, req.body);

    res
      .status(OK)
      .json(board);
  })
);

module.exports = router;
