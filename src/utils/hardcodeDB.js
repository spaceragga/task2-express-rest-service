const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const db = {
  Tasks: [],
  Users: [],
  Boards: [],
};

(() => {
  for (let i = 0; i < 3; i += 1) {
    db.Users.push(new User());
  }
  const board = new Board();
  db.Boards.push(board);
  db.Tasks.push(new Task({ boardId: board.id }));
})();

const getAllEntities = async (tableName) =>
  db[tableName].filter((entity) => entity);

const getUserEntities = async (tableName, props) => {
  const keys = Object.keys(props);

  return db[tableName].filter((entity) =>
    keys.every((key) => props[key] === entity[key])
  );
};

const getEntity = async (tableName, id) => {
  const entities = db[tableName].filter((entity) => id === entity.id);

  if (entities.length > 1) {
    throw Error('The DB data is wrong!');
  }

  return entities[0];
};

const deleteEntity = async (tableName, id) => {
  const entity = await getEntity(tableName, id);

  if (entity) {
    db[tableName] = db[tableName].filter((ent) => ent !== entity);
  }

  return entity;
};

const createEntity = async (tableName, entity) => {
  db[tableName].push(entity);

  return getEntity(tableName, entity.id);
};

const updateEntity = async (tableName, id, entity) => {
  const oldEntity = await getEntity(tableName, id);

  if (oldEntity) {
    const entityIndex = db[tableName].indexOf(oldEntity);

    db[tableName][entityIndex] = new oldEntity.constructor({
      ...oldEntity,
      ...entity,
    });
  }

  return getEntity(tableName, id);
};

const getIdEntity = async (tableName, id, user) => {
  const keys = Object.keys(user);

  const entities = db[tableName].filter((entity) => {
    const propCondition = keys.every((key) => user[key] === entity[key]);
    const idCondition = entity.id === id;

    return propCondition && idCondition;
  });

  if (entities.length > 1) {
    throw new Error('Data corrupted! More than one id present!');
  }

  return entities[0];
};

module.exports = {
  getAllEntities,
  getEntity,
  deleteEntity,
  createEntity,
  updateEntity,
  getIdEntity,
  getUserEntities,
};
