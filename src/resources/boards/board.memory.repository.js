const DB = require('../../utils/hardcodeDB');

const TABLE_NAME = 'Boards';
// const User = require('./user.model');

const getAll = async () => DB.getAllEntities(TABLE_NAME);

const get = async id => {
  const user = await DB.getEntity(TABLE_NAME, id);

  if(!user) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return user;
};

const remove = async id => {
  if(!(await DB.removeEntity(TABLE_NAME, id))) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }
};

const save = async user => DB.saveEntity(TABLE_NAME, user);

const update = async (id, user) => {
  const entity = await DB.updateEntity(TABLE_NAME, id, user);

  if(!entity) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return user;
};

module.exports = { getAll, get, remove, save, update };
