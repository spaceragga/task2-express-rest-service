const UserModel = require('./user.entity');
const usersRepo = require('./user.repository');
/**
 * Service for getting all Users
 * @returns {function(): Object[]} the returned Object array
 */
const getAllUser = (): (() => Object[]) => usersRepo.getAllUserDB();
/**
 * Service for getting User by id
 * @param {String} id User id
 * @returns {function(): Object} the returned Object
 */
const getUser = (id: string): (() => Object) => usersRepo.getUserDB(id);
/**
 * Service for remove User by id
 * @param {String} id User id
 * @returns {function(): void} the returned undefined
 */
const removeUser = (id: string): (() => void) => usersRepo.removeUserDB(id);
/**
 * Service for create User by id
 * @param {Object} user set data
 * @returns {function(): Object} the returned Object
 */
const createUser = (user: object): (() => Object) =>
  usersRepo.createUserDB(new UserModel(user));
/**
 * Service for update User by id
 * @param {String} id User id
 * @param {Object} user set data
 * @returns {function(): Object} the returned Object
 */
const updateUser = (id: string, user: object): (() => Object) =>
  usersRepo.updateUserDB(id, user);

module.exports = { getAllUser, getUser, removeUser, createUser, updateUser };
