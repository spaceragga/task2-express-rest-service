const boardDB = require('../../utils/hardcodeDB');

const TABLE_NAME_BOARD = 'boards';
/**
 * Getting entries from a table Boards
 * @returns {Promise<object[]>} get promise all boards
 */
const getAllBoardDB = async (): Promise<object[]> =>
  boardDB.getAllEntities(TABLE_NAME_BOARD);
/**
 * Getting entry from a table Boards
 * @param {String} id board id
 * @returns {Promise<object>} get promise a board by id
 */
const getBoardDB = async (id: string): Promise<object> => {
  const board = await boardDB.getEntity(TABLE_NAME_BOARD, id);

  if (!board) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return board;
};
/**
 * Remove entry from a table Boards
 * @param {String} id board id
 * @returns {Promise<void>} return promise undefined
 */
const removeBoardDB = async (id: string): Promise<void> => {
  const board = boardDB.deleteEntity(TABLE_NAME_BOARD, id);

  if (!board) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }
};
/**
 * Create entry in table Boards
 * @param {Object} board set data
 * @returns {Promise<object>} return promise object
 */
const createBoardDB = async (board: object): Promise<object> =>
  boardDB.createEntity(TABLE_NAME_BOARD, board);
/**
 * Update entry in table Boards
 * @param {String} id board id
 * @param {Object} user some data
 * @returns {Promise<object>} return promise object
 */
const updateBoardDB = async (id: string, user: object): Promise<object> => {
  const board = await boardDB.updateEntity(TABLE_NAME_BOARD, id, user);

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
