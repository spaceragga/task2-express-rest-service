import { getConnection, createConnection, getRepository } from 'typeorm';
import { config } from '../common/ormconfig';

const User = require('../resources/users/user.entity');
const { hashPassword } = require('../auth/hashHelper');

export const checkAdmin = async () => {
  const userRepository = getRepository(User);

  const user = await userRepository.findOne({
    where: {
      login: 'admin'
    },
  });

  if (!user) {
    const newUser: typeof User = await userRepository.create({
      name: 'admin',
      login: 'admin',
      password: await hashPassword('admin'),
    });
    await userRepository.save(newUser);
  }
};

export const connectToDB = async () => {
  let connection;

  try {
    connection = getConnection();
  } catch (err) {
    // handle error
  }

  try {
    if (connection) {
      if (!connection.isConnected) await connection.connect();
    } else {
      await createConnection(config);
    }
    await checkAdmin();
    console.log('Succesfully connected!');
  } catch (err) {
    console.error('Connection error!', err);
    // process.exit(1);
  }
};

//  const TryDBConnect = async (cb: () => void) => {
//     try {
//         await connectToDB();
//         cb();
//     } catch(err) {
//         console.error('DB connection err', err);
//     }
// }
