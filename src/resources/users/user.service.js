const User = require('./user.model');
const usersRepo = require('./user.memory.repository');
/**
 * Service for getting all Users
 * @returns {function(): Object[]} the returned Object array
 */
const getAll = () => usersRepo.getAll();
/**
 * Service for getting User by id
 * @param {String} id User id
 * @returns {function(): Object} the returned Object
 */
const get = (id) => usersRepo.get(id);
/**
 * Service for remove User by id
 * @param {String} id User id
 * @returns {function(): void} the returned undefined
 */
const remove = (id) => usersRepo.remove(id);
/**
 * Service for create User by id
 * @param {Object} user set data
 * @returns {function(): Object} the returned Object
 */
const create = (user) => usersRepo.create(new User(user));
/**
 * Service for update User by id
 * @param {String} id User id
 * @param {Object} user set data
 * @returns {function(): Object} the returned Object
 */
const update = (id, user) => usersRepo.update(id, user);

module.exports = { getAll, get, remove, create, update };
