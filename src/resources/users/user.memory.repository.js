const DB = require('../../utils/hardcodeDB');

const TABLE_NAME = 'Users';
/**
 * Getting entries from a table Users
 * @returns {Object[]} get all users
 */
const getAll = async () => DB.getAllEntities(TABLE_NAME);
/**
 * Getting entry from a table Users
 * @param {String} id User id
 * @returns {Object} get a User by id
 */
const get = async (id) => {
  const user = await DB.getEntity(TABLE_NAME, id);

  if (!user) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return user;
};
/**
 * Remove entry from a table Users
 * @param {String} id User id
 * @returns {void} return undefined
 */
const remove = async (id) => {
  const user = DB.deleteEntity(TABLE_NAME, id);

  if (!user) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }
};
/**
 * Create entry in table Users
 * @param {Object} user set data
 * @returns {Object} return object
 */
const create = async (user) => DB.createEntity(TABLE_NAME, user);
/**
 * Update entry in table Users
 * @param {String} id User id
 * @param {Object} user some data
 * @returns {Object} return object
 */
const update = async (id, user) => {
  const entity = await DB.updateEntity(TABLE_NAME, id, user);

  if (!entity) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return entity;
};

module.exports = { getAll, get, remove, create, update };
