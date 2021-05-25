const Task = require('./task.model');
const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const get = (id) => tasksRepo.get(id);

const remove = (id) => tasksRepo.remove(id);

const create = (task) => tasksRepo.create(new Task({ ...task }));

const update = (id, board) => tasksRepo.update(id, board);

module.exports = { getAll, get, create, update, remove };
