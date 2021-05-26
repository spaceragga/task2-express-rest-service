const User = require('./user.model');
const usersRepo = require('./user.memory.repository');
/**
 * Service for getting all Users
 * @returns {function(): void} the returned function
 */
const getAll = () => usersRepo.getAll();
/**
 * Service for getting User by id
 * @param {String} id User id
 * @returns {function(): void} the returned function
 */
const get = (id) => usersRepo.get(id);
/**
 * Service for remove User by id
 * @param {String} id User id
 * @returns {function(): void} the returned function
 */
const remove = (id) => usersRepo.remove(id);
/**
 * Service for create User by id
 * @param {Object} user set data
 * @returns {function(): void} the returned function
 */
const create = (user) => usersRepo.create(new User(user));
/**
 * Service for update User by id
 * @param {String} id User id
 * @param {Object} user set data
 * @returns {function(): void} the returned function
 */
const update = (id, user) => usersRepo.update(id, user);

module.exports = { getAll, get, remove, create, update };
