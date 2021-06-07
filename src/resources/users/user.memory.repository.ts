const userDB = require('../../utils/hardcodeDB');

const TABLE_NAME_USER = 'users';
/**
 * Getting entries from a table Users
 * @returns {Promise<Object[]>} get promise all users
 */
const getAllUserDB = async (): Promise<object[]> =>
  userDB.getAllEntities(TABLE_NAME_USER);
/**
 * Getting entry from a table Users
 * @param {String} id User id
 * @returns {Promise<object>} get promise a User by id
 */
const getUserDB = async (id: string): Promise<object> => {
  const user = await userDB.getEntity(TABLE_NAME_USER, id);

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
const removeUserDB = async (id: string): Promise<void> => {
  const user = userDB.deleteEntity(TABLE_NAME_USER, id);

  if (!user) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }
};
/**
 * Create entry in table Users
 * @param {Object} user set data
 * @returns {Promise<object>} return promise object
 */
const createUserDB = async (user: object): Promise<object> =>
  userDB.createEntity(TABLE_NAME_USER, user);
/**
 * Update entry in table Users
 * @param {String} id User id
 * @param {Object} user some data
 * @returns {Promise<object>} return promise object
 */
const updateUserDB = async (id: string, user: object): Promise<object> => {
  const entity = await userDB.updateEntity(TABLE_NAME_USER, id, user);

  if (!entity) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return entity;
};

module.exports = {
  getAllUserDB,
  getUserDB,
  removeUserDB,
  createUserDB,
  updateUserDB,
};
