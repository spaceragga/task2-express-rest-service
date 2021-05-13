const Task = require('./task.model');
const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const get = id => tasksRepo.get(id);

const remove = id => tasksRepo.remove(id);

const save = user => tasksRepo.save(new Task(user));

const update = (id, user) => tasksRepo.update(id, user);

module.exports = { getAll, get, remove, save, update };
