import { Request, Response } from 'express';
const router = require('express').Router({ mergeParams: true });
const { OK, CREATED, NO_CONTENT } = require('http-status-codes');
const Task = require('./task.model');
const tasksRepo = require('./task.service');
const catchError = require('../../utils/catchError');

router.route('/').get(
  catchError(async (_req: Request, res: Response) => {
    const tasks = await tasksRepo.getAllTask();
    res.status(OK).json(tasks.map(Task.toResponse));
  })
);

router.route('/:id').get(
  catchError(async (req: Request, res: Response) => {
    const { id } = req.params;

    const task = await tasksRepo.getTask(id);
    res.status(OK).json(Task.toResponse(task));
  })
);

router.route('/:id').delete(
  catchError(async (req: Request, res: Response) => {
    const { id } = req.params;

    await tasksRepo.removeTask(id);
    res.status(NO_CONTENT).send('The task is deleted');
  })
);

router.route('/').post(
  catchError(async (req: Request, res: Response) => {
    const { boardId } = req.params;
    const { title, order, description, userId, columnId } = req.body;

    const task = await tasksRepo.createTask({
      title,
      order,
      description,
      userId,
      boardId,
      columnId,
    });
    res.status(CREATED).json(Task.toResponse(task));
  })
);

router.route('/:id').put(
  catchError(async (req: Request, res: Response) => {
    const task = await tasksRepo.updateTask(req.params['id'], req.body);

    res.status(OK).json(Task.toResponse(task));
  })
);

module.exports = router;
