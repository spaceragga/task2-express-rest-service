const DB = require('../../utils/hardcodeDB');

const TABLE_NAME = 'Boards';
/**
 * Getting entries from a table Boards
 * @returns {Promise<object[]>} get promise all boards
 */
const getAllBoardDB = async () => DB.getAllEntities(TABLE_NAME);
/**
 * Getting entry from a table Boards
 * @param {String} id board id
 * @returns {Promise<object>} get promise a board by id
 */
const getBoardDB = async (id) => {
  const board = await DB.getEntity(TABLE_NAME, id);

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
const removeBoardDB = async (id) => {
  const board = DB.deleteEntity(TABLE_NAME, id);

  if (!board) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }
};
/**
 * Create entry in table Boards
 * @param {Object} board set data
 * @returns {Promise<object>} return promise object
 */
const createBoardDB = async (board) => DB.createEntity(TABLE_NAME, board);
/**
 * Update entry in table Boards
 * @param {String} id board id
 * @param {Object} user some data
 * @returns {Promise<object>} return promise object
 */
const updateBoardDB = async (id, user) => {
  const board = await DB.updateEntity(TABLE_NAME, id, user);

  if (!board) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return board;
};

module.exports = { getAllBoardDB, getBoardDB, removeBoardDB, createBoardDB, updateBoardDB };
