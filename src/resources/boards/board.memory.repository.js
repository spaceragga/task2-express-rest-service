const DB = require('../../utils/hardcodeDB');

const TABLE_NAME = 'Boards';
/**
 * Getting entries from a table Boards
 * @returns {Object[]} get all boards
 */
const getAll = async () => DB.getAllEntities(TABLE_NAME);
/**
 * Getting entry from a table Boards
 * @param {String} id board id
 * @returns {Object} get a board by id
 */
const get = async (id) => {
  const board = await DB.getEntity(TABLE_NAME, id);

  if (!board) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return board;
};
/**
 * Remove entry from a table Boards
 * @param {String} id board id
 * @returns {void} return undefined
 */
const remove = async (id) => {
  const board = DB.deleteEntity(TABLE_NAME, id);

  if (!board) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }
};
/**
 * Create entry in table Boards
 * @param {Object} board set data
 * @returns {Object} return object
 */
const create = async (board) => DB.createEntity(TABLE_NAME, board);
/**
 * Update entry in table Boards
 * @param {String} id board id
 * @param {Object} user some data
 * @returns {Object} return object
 */
const update = async (id, user) => {
  const board = await DB.updateEntity(TABLE_NAME, id, user);

  if (!board) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return board;
};

module.exports = { getAll, get, remove, create, update };
