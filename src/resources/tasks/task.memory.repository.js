const DB = require('../../utils/hardcodeDB');

const TABLE_NAME = 'Tasks';

const getAll = async () => DB.getAllEntities(TABLE_NAME);

const get = async (id) => {
  const task = await DB.getEntity(TABLE_NAME, id);

  if (!task) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }

  return task;
};

const remove = async (id) => {
  const removedTask = DB.deleteEntity(TABLE_NAME, id);

  if (!removedTask) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }
};

const create = async (task) => DB.createEntity(TABLE_NAME, task);

const update = async (id, user) => {
  const updatedTask = await DB.updateEntity(TABLE_NAME, id, user);

  if (!updatedTask) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }

  return updatedTask;
};

module.exports = { getAll, get, create, update, remove };
