const tasksRepo = require('./task.repository');
/**
 * Service for getting all Tasks
 * @returns {function(): Object[]} the returned Object array
 */
const getAllTask = (): (() => Object[]) => tasksRepo.getAllTaskDB();
/**
 * Service for getting Task by id
 * @param {String} id User id
 * @returns {function(): Object} the returned Object
 */
const getTask = (id: string): (() => Object) => tasksRepo.getTaskDB(id);
/**
 * Service for remove Task by id
 * @param {String} id Task id
 * @returns {function(): void} the returned undefined
 */
const removeTask = (id: string): (() => void) => tasksRepo.removeTaskDB(id);
/**
 * Service for create Task by id
 * @param {Object} task set data
 * @returns {function(): Object} the returned Object
 */
const createTask = (task: object): (() => Object) =>
  tasksRepo.createTaskDB(task);
/**
 * Service for update Task by id
 * @param {String} id Task id
 * @param {Object} board set data
 * @returns {function(): Object} the returned Object
 */
const updateTask = (boardId: string, id: string, board: object): (() => Object) =>
  tasksRepo.updateTaskDB(boardId, id, board);

module.exports = { getAllTask, getTask, removeTask, createTask, updateTask };
