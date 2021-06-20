import { getRepository } from 'typeorm';

const Board = require('./board.entity');
const Column = require('../columns/column.entity');

const getAllBoardDB = async (): Promise<typeof Board[]> => {
  const boardRepository = getRepository(Board);
  return boardRepository.find({ where: {} });
};

const getBoardDB = async (id: string): Promise<typeof Board> => {
  const boardRepository = getRepository(Board);

  const board = await boardRepository.findOne(id);
  if (!board) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return board;
};

const removeBoardDB = async (id: string): Promise<void> => {
  const boardRepository = getRepository(Board);

  const deleteBoard = await boardRepository.delete(id);
  if (!deleteBoard) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  const taskRepository = getRepository(Board);
  await taskRepository.update({ boardId: id }, { boardId: null });
};

const createBoardDB = async (board: any): Promise<object> => {
  const boardRepository = getRepository(Board);

  const columns = await Promise.all(board.columns?.map(Column.create) || []);
  const boardCreatable = { ...board, columns };
  const newBoard = await boardRepository.create(boardCreatable);
  const boardDB = await boardRepository.save(newBoard);
  return boardDB;
};

const updateBoardDB = async (id: string, user: any): Promise<typeof Board> => {
  const boardRepository = getRepository(Board);

  const columns = await Promise.all(user.columns?.map(Column.create) || []);
  const boardUpdatable = { ...user, columns };

  await boardRepository.update(id, boardUpdatable);

  const board = await boardRepository.findOne(id);

  if (!board) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return board;
};

module.exports = {
  getAllBoardDB,
  getBoardDB,
  removeBoardDB,
  createBoardDB,
  updateBoardDB,
};
