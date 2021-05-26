const db = {
  Tasks: [],
  Users: [],
  Boards: [],
};

const getAllEntities = async (tableName) =>
  JSON.parse(JSON.stringify(db[tableName]));

const getEntity = async (tableName, id) =>
  db[tableName].find((entity) => entity.id === id);

const createEntity = async (tableName, entity) => {
  db[tableName].push(entity);
  return entity;
};

const updateEntity = async (tableName, id, props) => {
  const entity = await getEntity(tableName, id);
  Object.assign(entity, { ...props });
  return entity;
};

const deleteEntity = async (tableName, id) => {
  switch (tableName) {
    case 'Users':
      db[tableName] = db[tableName].filter((entity) => entity.id !== id);
      db.Tasks = db.Tasks.map((entity) => {
        const oldEntity = entity;
        if (oldEntity.userId === id) {
          oldEntity.userId = null;
        }
        return oldEntity;
      });
      break;
    case 'Boards':
      db[tableName] = db[tableName].filter((entity) => entity.id !== id);
      db.Tasks = db.Tasks.filter((entity) => entity.boardId !== id);
      break;
    case 'Tasks':
      db[tableName] = db[tableName].filter((entity) => entity.id !== id);
      break;
    default:
      throw new Error('Parameter tableName  is missing!');
  }
};

module.exports = {
  getAllEntities,
  getEntity,
  deleteEntity,
  createEntity,
  updateEntity,
};
