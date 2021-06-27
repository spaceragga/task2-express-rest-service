import { getRepository } from 'typeorm';

const User = require('./user.entity');
// const { hashPassword } = require('../../auth/hashHelper');


const getAllUserDB = async (): Promise<typeof User[]> => {
  const userRepository = getRepository(User);
  return userRepository.find({ where: {} });
};

const getUserDB = async (id: string): Promise<typeof User> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(id);

  if (!user) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  return user;
};

const removeUserDB = async (id: string): Promise<void> => {
  const userRepository = getRepository(User);
  const deleteUser = await userRepository.delete({ id });

  if (!deleteUser) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }
};

const createUserDB = async (user: typeof User): Promise<typeof User> => {
  const userRepository = getRepository(User);

  // const { password } = user;
  // const hashedPassword = await hashPassword(password);
  // const userWithHash = {
  //     ...user,
  //     password: hashedPassword
  // };

  const newUser: typeof User = await userRepository.create(user);
  await userRepository.save(newUser);
  return getUserDB(newUser.id);
};

const updateUserDB = async (id: string, user: object): Promise<object> => {
  const userRepository = getRepository(User);
  const userDB = await userRepository.findOne(id);

  if (!userDB) {
    throw new Error(`Couldn't find a user with id: ${id}`);
  }

  await userRepository.update(id, user);

  return getUserDB(id);
};

module.exports = {
  getAllUserDB,
  getUserDB,
  removeUserDB,
  createUserDB,
  updateUserDB,
};
