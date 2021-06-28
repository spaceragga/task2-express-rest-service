import { getRepository } from 'typeorm';
// const userDB = require('../../utils/hardcodeDB');
const User = require('./user.entity');

// const TABLE_NAME_USER = 'users';

const getAllUserDB = async (): Promise<typeof User[]> => {
  const studentRepository = getRepository(User);
  return studentRepository.find({ where: {} });
};

const getUserDB = async (id: string): Promise<typeof User> => {
  const studentRepository = getRepository(User);
  const user = await studentRepository.findOne(id);

  if (!user) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return user;
};

const removeUserDB = async (id: string): Promise<void> => {
  const studentRepository = getRepository(User);
  const deleteUser = await studentRepository.delete(id);

  if (!deleteUser) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }
};

const createUserDB = async (user: typeof User): Promise<typeof User> => {
  const studentRepository = getRepository(User);
  const newUser = await studentRepository.create(user);
  const savedUser = await studentRepository.save(newUser);
  return savedUser;
};

const updateUserDB = async (id: string, user: object): Promise<object> => {
  const studentRepository = getRepository(User);
  const userDB = await studentRepository.findOne(id);

  if (!userDB) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  const updateUser = await studentRepository.update(id, user);

  return updateUser;
};

module.exports = {
  getAllUserDB,
  getUserDB,
  removeUserDB,
  createUserDB,
  updateUserDB,
};
