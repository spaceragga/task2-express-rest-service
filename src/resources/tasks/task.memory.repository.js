const DB = require('../../utils/hardcodeDB');

const TABLE_NAME = 'Tasks';
/**
 * Getting entries from a table Tasks
 * @returns {Promise<object[]>} get promise all tasks
 */
const getAllTaskDB = async () => DB.getAllEntities(TABLE_NAME);
/**
 * Getting entry from a table Tasks
 * @param {String} id Task id
 * @returns {Promise<object>} get promise a Task by id
 */
const getTaskDB = async (id) => {
  const task = await DB.getEntity(TABLE_NAME, id);

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
const removeTaskDB = async (id) => {
  const removedTask = DB.deleteEntity(TABLE_NAME, id);

  if (!removedTask) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }
};
/**
 * Create entry in table Tasks
 * @param {Object} task set data
 * @returns {Promise<object>} return promise object
 */
const createTaskDB = async (task) => DB.createEntity(TABLE_NAME, task);
/**
 * Update entry in table Tasks
 * @param {String} id Task id
 * @param {Object} user some data
 * @returns {Promise<object>} return promise object
 */
const updateTaskDB = async (id, user) => {
  const updatedTask = await DB.updateEntity(TABLE_NAME, id, user);

  if (!updatedTask) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }

  return updatedTask;
};

module.exports = { getAllTaskDB, getTaskDB, removeTaskDB, createTaskDB, updateTaskDB };
