const DB = require('../../utils/hardcodeDB');

const TABLE_NAME = 'Users';
/**
 * Getting entries from a table Users
 * @returns {Promise<Object[]>} get promise all users
 */
const getAllUserDB = async () => DB.getAllEntities(TABLE_NAME);
/**
 * Getting entry from a table Users
 * @param {String} id User id
 * @returns {Promise<object>} get promise a User by id
 */
const getUserDB = async (id) => {
  const user = await DB.getEntity(TABLE_NAME, id);

  if (!user) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return user;
};
/**
 * Remove entry from a table Users
 * @param {String} id User id
 * @returns {Promise<void>} return promise undefined
 */
const removeUserDB = async (id) => {
  const user = DB.deleteEntity(TABLE_NAME, id);

  if (!user) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }
};
/**
 * Create entry in table Users
 * @param {Object} user set data
 * @returns {Promise<object>} return promise object
 */
const createUserDB = async (user) => DB.createEntity(TABLE_NAME, user);
/**
 * Update entry in table Users
 * @param {String} id User id
 * @param {Object} user some data
 * @returns {Promise<object>} return promise object
 */
const updateUserDB = async (id, user) => {
  const entity = await DB.updateEntity(TABLE_NAME, id, user);

  if (!entity) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return entity;
};

module.exports = { getAllUserDB, getUserDB, removeUserDB, createUserDB, updateUserDB };
