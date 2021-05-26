const db = {
  Tasks: [],
  Users: [],
  Boards: [],
};
/**
 * Function for getting all objects in db by parameter
 * @param {String} tableName - name property in db
 * @returns {Object[]} - return array of objects
 */
const getAllEntities = async (tableName) =>
  JSON.parse(JSON.stringify(db[tableName]));
/**
 * Function for getting objects in db by id
 * @param {String} tableName - name property
 * @param {String} id - id parameter
 * @returns {Object} - return object
 */
const getEntity = async (tableName, id) =>
  db[tableName].find((entity) => entity.id === id);
/**
 * Function for create objects in db by parameters
 * @param {String} tableName - name property in db
 * @param {Object} entity - object for push in array
 * @returns {Object} - return object
 */
const createEntity = async (tableName, entity) => {
  db[tableName].push(entity);
  return entity;
};
/**
 * Function for update objects in db by parameters
 * @param {String} tableName - name property in db
 * @param {String} id - id parameter
 * @param {Object} props - data for update
 * @returns {Object} - return object
 */
const updateEntity = async (tableName, id, props) => {
  const entity = await getEntity(tableName, id);
  Object.assign(entity, { ...props });
  return entity;
};
/**
 * Function for delete objects in db by parameters
 * @param {String} tableName - name property in db
 * @param {String} id - id parameter for delete
 * @returns {void} return undefined

 */
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
