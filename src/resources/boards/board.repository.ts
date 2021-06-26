import { getRepository } from 'typeorm';

const Board = require('./board.entity');

const getAllBoardDB = async (): Promise<typeof Board[]> => {
  const boardRepository = getRepository(Board);
  return boardRepository.find();
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

  const deleteBoard = await boardRepository.delete({ id });
  if (!deleteBoard) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

};

const createBoardDB = async (board: typeof Board): Promise<object> => {
  const boardRepository = getRepository(Board);

  const newBoard: typeof Board = boardRepository.create(board);
  await boardRepository.save(newBoard);
  return getBoardDB(newBoard.id);
};

const updateBoardDB = async (id: string, user: typeof Board): Promise<typeof Board> => {
  const boardRepository = getRepository(Board);
  const board: typeof Board = await boardRepository.findOne(id);

  if (!board) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }
  
  return boardRepository.save({ ...board, ...user });
};

module.exports = {
  getAllBoardDB,
  getBoardDB,
  removeBoardDB,
  createBoardDB,
  updateBoardDB,
};
