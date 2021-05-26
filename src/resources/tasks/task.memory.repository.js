const DB = require('../../utils/hardcodeDB');

const TABLE_NAME = 'Tasks';
/**
 * Getting entries from a table Tasks
 * @returns {Object[]} get all tasks
 */
const getAll = async () => DB.getAllEntities(TABLE_NAME);
/**
 * Getting entry from a table Tasks
 * @param {String} id Task id
 * @returns {Object} get a Task by id
 */
const get = async (id) => {
  const task = await DB.getEntity(TABLE_NAME, id);

  if (!task) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }

  return task;
};
/**
 * Remove entry from a table Tasks
 * @param {String} id Task id
 * @returns {void} return undefined
 */
const remove = async (id) => {
  const removedTask = DB.deleteEntity(TABLE_NAME, id);

  if (!removedTask) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }
};
/**
 * Create entry in table Tasks
 * @param {Object} task set data
 * @returns {Object} return object
 */
const create = async (task) => DB.createEntity(TABLE_NAME, task);
/**
 * Update entry in table Tasks
 * @param {String} id Task id
 * @param {Object} user some data
 * @returns {Object} return object
 */
const update = async (id, user) => {
  const updatedTask = await DB.updateEntity(TABLE_NAME, id, user);

  if (!updatedTask) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }

  return updatedTask;
};

module.exports = { getAll, get, create, update, remove };
