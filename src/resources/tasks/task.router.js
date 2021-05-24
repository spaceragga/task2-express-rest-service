const router = require('express').Router();
const { OK, CREATED, NO_CONTENT } = require('http-status-codes');
const Task = require('./task.model');
const tasksRepo = require('./task.service');
const catchError = require('../../utils/catchError');

router.route('/:boardId/tasks').get(
  catchError(async (req, res) => {
    const tasks = await tasksRepo.getAll(req.params.boardId);

    res.status(OK).json(tasks.map(Task.toResponse));
  })
);

router.route('/:boardId/tasks/:id').get(
  catchError(async (req, res) => {
    const task = await tasksRepo.get(req.params.boardId, req.params.id);

    res.status(OK).json(Task.toResponse(task));
  })
);

router.route('/:boardId/tasks/:id').delete(
  catchError(async (req, res) => {
    await tasksRepo.remove(req.params.boardId, req.params.id);

    res.status(NO_CONTENT);
    // .sendStatus(NO_CONTENT);
  })
);

router.route('/:boardId/tasks').post(
  catchError(async (req, res) => {
    const task = await tasksRepo.create(req.params.boardId, req.body);

    // res.status(OK).send(board);
    res.status(CREATED).json(Task.toResponse(task));
  })
);

router.route('/:boardId/tasks/:id').put(
  catchError(async (req, res) => {
    const task = await tasksRepo.update(
      req.params.boardId,
      req.params.id,
      req.body
    );

    res.status(OK).json(Task.toResponse(task));
  })
);

module.exports = router;
