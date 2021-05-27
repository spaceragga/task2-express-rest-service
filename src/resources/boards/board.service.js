const Board = require('./board.model');
const boardsRepo = require('./board.memory.repository');
/**
 * Service for getting all Boards
 * @returns {function(): Object[]} the returned Object array
 */
const getAll = () => boardsRepo.getAll();
/**
 * Service for getting Board by id
 * @param {String} id User id
 * @returns {function(): Object} the returned Object
 */
const get = (id) => boardsRepo.get(id);
/**
 * Service for remove Board by id
 * @param {String} id Board id
 * @returns {function(): void} the returned undefined
 */
const remove = (id) => boardsRepo.remove(id);
/**
 * Service for create Board by id
 * @param {Object} board set data
 * @returns {function(): Object} the returned Object
 */
const create = (board) => boardsRepo.create(new Board(board));
/**
 * Service for update Board by id
 * @param {String} id Board id
 * @param {Object} board set data
 * @returns {function(): Object} the returned Object
 */
const update = (id, board) => boardsRepo.update(id, board);

module.exports = { getAll, get, remove, create, update };
