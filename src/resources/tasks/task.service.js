const Task = require('./task.model');
const tasksRepo = require('./task.memory.repository');

const getAll = (boardId) => tasksRepo.getAll(boardId);

const get = (boardId, id) => tasksRepo.get(boardId, id);

const remove = (boardId, id) => tasksRepo.remove(boardId, id);

const create = (boardId, task) =>
  tasksRepo.create(new Task({ ...task, boardId }));

const update = (boardId, id, task) => tasksRepo.update(boardId, id, task);

const removeAll = (boardId) => tasksRepo.removeAll(boardId);

const removeUser = (userId) => tasksRepo.removeUser(userId);

module.exports = {
  getAll,
  get,
  remove,
  create,
  update,
  removeAll,
  removeUser,
};
