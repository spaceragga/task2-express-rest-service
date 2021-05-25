const DB = require('../../utils/hardcodeDB');

const TABLE_NAME = 'Boards';

const getAll = async () => DB.getAllEntities(TABLE_NAME);

const get = async (id) => {
  const board = await DB.getEntity(TABLE_NAME, id);

  if (!board) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return board;
};

const remove = async (id) => {
  const board = DB.deleteEntity(TABLE_NAME, id);

  if (!board) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }
};

const create = async (board) => DB.createEntity(TABLE_NAME, board);

const update = async (id, user) => {
  const board = await DB.updateEntity(TABLE_NAME, id, user);

  if (!board) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return board;
};

module.exports = { getAll, get, remove, create, update };
