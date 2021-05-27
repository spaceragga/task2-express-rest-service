const Task = require('./task.model');
const tasksRepo = require('./task.memory.repository');
/**
 * Service for getting all Tasks
 * @returns {function(): Object[]} the returned Object array
 */
const getAll = () => tasksRepo.getAll();
/**
 * Service for getting Task by id
 * @param {String} id User id
 * @returns {function(): Object} the returned Object
 */
const get = (id) => tasksRepo.get(id);
/**
 * Service for remove Task by id
 * @param {String} id Task id
 * @returns {function(): void} the returned undefined
 */
const remove = (id) => tasksRepo.remove(id);
/**
 * Service for create Task by id
 * @param {Object} task set data
 * @returns {function(): Object} the returned Object
 */
const create = (task) => tasksRepo.create(new Task({ ...task }));
/**
 * Service for update Task by id
 * @param {String} id Task id
 * @param {Object} board set data
 * @returns {function(): Object} the returned Object
 */
const update = (id, board) => tasksRepo.update(id, board);

module.exports = { getAll, get, create, update, remove };
