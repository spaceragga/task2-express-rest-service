const DB = require('../../utils/hardcodeDB');
const Task = require('./task.model');

const TABLE_NAME = 'Tasks';
// const User = require('./user.model');

const getAll = async (boardId) =>
  DB.getUserEntities(TABLE_NAME, { boardId });

const get = async (boardId, id) => {
  const task = await DB.getIdEntity(TABLE_NAME, id, { boardId });

  if (!task) {
    throw new Error(
      `Couldn't find a task with id: ${id} and boardId: ${boardId}`
    );
  }

  return task;
};

const remove = async (boardId, id) => {
  const removedTask = await DB.deleteEntity(TABLE_NAME, id);

  if (!removedTask) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }
};

const create = async (task) => DB.createEntity(TABLE_NAME, task);

const update = async (boardId, id, user) => {
  const updatedTask = await DB.updateEntity(TABLE_NAME, id, user);

  if (!updatedTask) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }

  return updatedTask;
};

const removeAll = async (boardId) => {
  const removedTasks = await DB.getUserEntities(TABLE_NAME, { boardId });

  removedTasks.forEach(async (task) => {
    await remove(boardId, task.id);
  });
};

const removeUser = async (userId) => {
  const tasks = await DB.getAllEntities(TABLE_NAME);

  tasks.forEach(async (task) => {
    if (task.userId === userId) {
      await update(task.boardId, task.id, new Task({ ...task, userId: null }));
    }
  });
};

module.exports = {
  getAll,
  get,
  remove,
  create,
  update,
  removeAll,
  removeUser,
};
