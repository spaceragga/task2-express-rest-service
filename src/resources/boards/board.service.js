const Board = require('./board.model');
const boardsRepo = require('./board.memory.repository');
/**
 * Service for getting all Boards
 * @returns {function(): Object[]} the returned Object array
 */
const getAllBoard = () => boardsRepo.getAllBoardDB();
/**
 * Service for getting Board by id
 * @param {String} id User id
 * @returns {function(): Object} the returned Object
 */
const getBoard = (id) => boardsRepo.getBoardDB(id);
/**
 * Service for remove Board by id
 * @param {String} id Board id
 * @returns {function(): void} the returned undefined
 */
const removeBoard = (id) => boardsRepo.removeBoardDB(id);
/**
 * Service for create Board by id
 * @param {Object} board set data
 * @returns {function(): Object} the returned Object
 */
const createBoard = (board) => boardsRepo.createBoardDB(new Board(board));
/**
 * Service for update Board by id
 * @param {String} id Board id
 * @param {Object} board set data
 * @returns {function(): Object} the returned Object
 */
const updateBoard = (id, board) => boardsRepo.updateBoardDB(id, board);

module.exports = { getAllBoard, getBoard, removeBoard, createBoard, updateBoard };
