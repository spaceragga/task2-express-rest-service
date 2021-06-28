const BoardModel = require('./board.entity');
const boardsRepo = require('./board.repository');
/**
 * Service for getting all Boards
 * @returns {function(): Object[]} the returned Object array
 */
const getAllBoard = (): (() => Object[]) => boardsRepo.getAllBoardDB();
/**
 * Service for getting Board by id
 * @param {String} id User id
 * @returns {function(): Object} the returned Object
 */
const getBoard = (id: string): (() => Object) => boardsRepo.getBoardDB(id);
/**
 * Service for remove Board by id
 * @param {String} id Board id
 * @returns {function(): void} the returned undefined
 */
const removeBoard = (id: string): (() => void) => boardsRepo.removeBoardDB(id);
/**
 * Service for create Board by id
 * @param {Object} board set data
 * @returns {function(): Object} the returned Object
 */
const createBoard = (board: object): (() => Object) =>
  boardsRepo.createBoardDB(new BoardModel(board));
/**
 * Service for update Board by id
 * @param {String} id Board id
 * @param {Object} board set data
 * @returns {function(): Object} the returned Object
 */
const updateBoard = (id: string, board: object): (() => Object) =>
  boardsRepo.updateBoardDB(id, board);

module.exports = {
  getAllBoard,
  getBoard,
  removeBoard,
  createBoard,
  updateBoard,
};
