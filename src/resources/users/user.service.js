const User = require('./user.model');
const usersRepo = require('./user.memory.repository');
const taskService = require("../tasks/task.service")


const getAll = () => usersRepo.getAll();

const get = id => usersRepo.get(id);

const remove = async id => {
    await usersRepo.remove(id);
    await taskService.removeUserBinding(id);
}

const create = user => usersRepo.save(new User(user));

const update = (id, user) => usersRepo.update(id, user);

module.exports = { getAll, get, remove, create, update };
