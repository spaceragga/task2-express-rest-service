const boardsRepo = require('./board.memory.repository');
const tasksService = require('../tasks/task.service');
const Board = require('./board.model');

const getAll = () => boardsRepo.getAll();

const get = (id) => boardsRepo.get(id);

const remove = async (id) => {
  await boardsRepo.remove(id);
  await tasksService.removeAll(id);
};

const create = (board) => boardsRepo.create(new Board(board));

const update = (id, board) => boardsRepo.update(id, board);

module.exports = { getAll, get, remove, create, update };
