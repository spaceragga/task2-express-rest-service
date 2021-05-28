const User = require('./user.model');
const usersRepo = require('./user.memory.repository');
/**
 * Service for getting all Users
 * @returns {function(): Object[]} the returned Object array
 */
const getAllUser = () => usersRepo.getAllUserDB();
/**
 * Service for getting User by id
 * @param {String} id User id
 * @returns {function(): Object} the returned Object
 */
const getUser = (id) => usersRepo.getUserDB(id);
/**
 * Service for remove User by id
 * @param {String} id User id
 * @returns {function(): void} the returned undefined
 */
const removeUser = (id) => usersRepo.removeUserDB(id);
/**
 * Service for create User by id
 * @param {Object} user set data
 * @returns {function(): Object} the returned Object
 */
const createUser = (user) => usersRepo.createUserDB(new User(user));
/**
 * Service for update User by id
 * @param {String} id User id
 * @param {Object} user set data
 * @returns {function(): Object} the returned Object
 */
const updateUser = (id, user) => usersRepo.updateUserDB(id, user);

module.exports = { getAllUser, getUser, removeUser, createUser, updateUser };
