import { getRepository } from 'typeorm';

const Task = require('./task.entity');

const getAllTaskDB = async (): Promise<typeof Task[]> => {
  const taskRepository = getRepository(Task);
  return taskRepository.find({ where: {} });
};

const getTaskDB = async (id: string): Promise<typeof Task> => {
  const taskRepository = getRepository(Task);
  const task = await taskRepository.findOne(id);

  if (!task) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }

  return task;
};

const removeTaskDB = async (id: string): Promise<void> => {
  const taskRepository = getRepository(Task);
  const removedTask = await taskRepository.delete({ id });

  if (!removedTask) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }
};

const createTaskDB = async (task: typeof Task): Promise<typeof Task> => {
  const taskRepository = getRepository(Task);
  const taskDB: typeof Task = taskRepository.create(task);
  return taskRepository.save(taskDB);
};

const updateTaskDB = async (boardId: string, id: string, user: object): Promise<object> => {
  const taskRepository = getRepository(Task);
  const taskDB: typeof Task = await taskRepository.findOne(id, {
    where: { boardId },
  });

  if (!taskDB) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }

  return taskRepository.save({ ...taskDB, ...user });
};

module.exports = {
  getAllTaskDB,
  getTaskDB,
  removeTaskDB,
  createTaskDB,
  updateTaskDB,
};
