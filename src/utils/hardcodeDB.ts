interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
}

interface IBoard {
  id: string;
  title: string;
  columns: { id: string; title: string; order: number }[];
}

interface ITask {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: null | string;
  boardId: null | string;
  columnId: null | string;
}

interface IDB {
  tasks: ITask[];
  users: IUser[];
  boards: IBoard[];
}

type TableName = keyof IDB;
type TableEntity = ITask & IUser & IBoard;

const db: IDB = {
  tasks: [],
  users: [],
  boards: [],
};

/**
 * Function for getting all objects in db by parameter
 * @param {String} tableName - name property in db
 * @returns {Promise<object[]>} - return promise array of objects
 */
const getAllEntities = async (tableName: TableName): Promise<object[]> =>
  JSON.parse(JSON.stringify(db[tableName]));
/**
 * Function for getting objects in db by id
 * @param {String} tableName - name property
 * @param {String} id - id parameter
 * @returns {Promise<object>} - return promise object
 */
const getEntity = async (tableName: TableName, id: string) =>
  (db[tableName] as Array<TableEntity>).find(
    (entity: { id: string }) => entity.id === id
  );
/**
 * Function for create objects in db by parameters
 * @param {String} tableName - name property in db
 * @param {Object} entity - object for push in array
 * @returns {Promise<object>} - return promise object
 */
const createEntity = async (
  tableName: TableName,
  entity: TableEntity
): Promise<object> => {
  db[tableName].push(entity);

  return entity;
};
/**
 * Function for update objects in db by parameters
 * @param {String} tableName - name property in db
 * @param {String} id - id parameter
 * @param {Object} props - data for update
 * @returns {Promise<object> } - return promise object
 */
const updateEntity = async (
  tableName: TableName,
  id: string,
  props: object
) => {
  const entity = await getEntity(tableName, id);
  Object.assign(entity, { ...props });

  return entity;
};
/**
 * Function for delete objects in db by parameters
 * @param {String} tableName - name property in db
 * @param {String} id - id parameter for delete
 * @returns {Promise<void>} return promise undefined
 */
const deleteEntity = async (
  tableName: TableName,
  id: string
): Promise<void> => {
  switch (tableName) {
    case 'users':
      db[tableName] = db[tableName].filter((entity) => entity['id'] !== id);
      db.tasks = db.tasks.map((entity) => {
        const oldEntity = entity;
        if (oldEntity['userId'] === id) {
          oldEntity['userId'] = null;
        }
        return oldEntity;
      });
      break;

    case 'boards':
      db[tableName] = db[tableName].filter((entity) => entity['id'] !== id);
      db.tasks = db.tasks.filter((entity) => entity['boardId'] !== id);
      break;

    case 'tasks':
      db[tableName] = db[tableName].filter((entity) => entity['id'] !== id);
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
