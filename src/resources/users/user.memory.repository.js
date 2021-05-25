const DB = require('../../utils/hardcodeDB');

const TABLE_NAME = 'Users';

const getAll = async () => DB.getAllEntities(TABLE_NAME);

const get = async (id) => {
  const user = await DB.getEntity(TABLE_NAME, id);

  if (!user) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return user;
};

const remove = async (id) => {
  const user = DB.deleteEntity(TABLE_NAME, id);

  if (!user) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }
};

const create = async (user) => DB.createEntity(TABLE_NAME, user);

const update = async (id, user) => {
  const entity = await DB.updateEntity(TABLE_NAME, id, user);

  if (!entity) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return entity;
};

module.exports = { getAll, get, remove, create, update };
