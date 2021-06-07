const taskDB = require('../../utils/hardcodeDB');

const TABLE_NAME_TASK = 'tasks';
/**
 * Getting entries from a table Tasks
 * @returns {Promise<object[]>} get promise all tasks
 */
const getAllTaskDB = async (): Promise<object[]> =>
  taskDB.getAllEntities(TABLE_NAME_TASK);
/**
 * Getting entry from a table Tasks
 * @param {String} id Task id
 * @returns {Promise<object>} get promise a Task by id
 */
const getTaskDB = async (id: string): Promise<object> => {
  const task = await taskDB.getEntity(TABLE_NAME_TASK, id);

  if (!task) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }

  return task;
};
/**
 * Remove entry from a table Tasks
 * @param {String} id Task id
 * @returns {Promise<void>} return promise undefined
 */
const removeTaskDB = async (id: string): Promise<void> => {
  const removedTask = taskDB.deleteEntity(TABLE_NAME_TASK, id);

  if (!removedTask) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }
};
/**
 * Create entry in table Tasks
 * @param {Object} task set data
 * @returns {Promise<object>} return promise object
 */
const createTaskDB = async (task: object): Promise<object> =>
  taskDB.createEntity(TABLE_NAME_TASK, task);
/**
 * Update entry in table Tasks
 * @param {String} id Task id
 * @param {Object} user some data
 * @returns {Promise<object>} return promise object
 */
const updateTaskDB = async (id: string, user: object): Promise<object> => {
  const updatedTask = await taskDB.updateEntity(TABLE_NAME_TASK, id, user);

  if (!updatedTask) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }

  return updatedTask;
};

module.exports = {
  getAllTaskDB,
  getTaskDB,
  removeTaskDB,
  createTaskDB,
  updateTaskDB,
};
