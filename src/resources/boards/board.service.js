const Board = require('./board.model');
const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const get = id => boardsRepo.get(id);

const remove = id => boardsRepo.remove(id);

const save = user => boardsRepo.save(new Board(user));

const update = (id, user) => boardsRepo.update(id, user);

module.exports = { getAll, get, remove, save, update };
