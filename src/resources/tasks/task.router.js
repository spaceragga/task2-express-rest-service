const router = require('express').Router();
const { OK, CREATED, NO_CONTENT } = require('http-status-codes');
const Task = require('./task.model');
const tasksRepo = require('./task.service');
const wrapAsync = require('../../utils/wrapAsync');

router.route('/:id/tasks').get(
  wrapAsync(async (req, res) => {
    const users = await tasksRepo.get(req.params.id);
    await res.status(OK).json(users.map(Task.toResponse));
  })
);

router.route('/:id').get(
  wrapAsync(async (req, res) => {
    const user = await tasksRepo.get(req.params.id);
    res.status(OK).send(Task.toResponse(user));
  })
);

router.route('/:id').delete(
  wrapAsync(async (req, res) => {
    await tasksRepo.remove(req.params.id);
    res.sendStatus(NO_CONTENT);
  })
);

router.route('/:id/tasks').post(
  wrapAsync(async (req, res) => {
    const user = await tasksRepo.save(Task.fromRequest(req.body));
    res.status(CREATED).send(Task.toResponse(user));
  })
);

router.route('/:id').put(
  wrapAsync(async (req, res) => {
    const user = await tasksRepo.update(
      req.params.id,
      Task.fromRequest(req.body)
    );
    res.status(OK).send(Task.toResponse(user));
  })
);

module.exports = router;
