const router = require('express').Router();
const { OK, CREATED, NO_CONTENT } = require('http-status-codes');
const boardsRepo = require('./board.service');
const catchError = require('../../utils/catchError');

router.route('/').get(
  catchError(async (req, res) => {
    const boards = await boardsRepo.getAllBoard();

    res
      .status(OK)
      .json(boards);
  })
);

router.route('/:id').get(
  catchError(async (req, res) => {
    const { id } = req.params;

    const board = await boardsRepo.getBoard(id);

    res
      .status(OK)
      .json(board);
  })
);

router.route('/:id').delete(
  catchError(async (req, res) => {
    await boardsRepo.removeBoard(req.params.id);

    res
      .sendStatus(NO_CONTENT);
  })
);

router.route('/').post(
  catchError(async (req, res) => {
    const board = await boardsRepo.createBoard(req.body);

    res
      .status(CREATED)
      .json(board);
  })
);

router.route('/:id').put(
  catchError(async (req, res) => {
    const { id } = req.params;

    const board = await boardsRepo.updateBoard(id, req.body);

    res
      .status(OK)
      .json(board);
  })
);

module.exports = router;
