const User = require('./user.model');
const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const get = (id) => usersRepo.get(id);

const remove = (id) => usersRepo.remove(id);

const create = (user) => usersRepo.create(new User(user));

const update = (id, user) => usersRepo.update(id, user);

module.exports = { getAll, get, remove, create, update };
