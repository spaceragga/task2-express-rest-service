import dotenv from 'dotenv';
import path from 'path';

interface Iuser {
  name: string;
  login: string;
  password: string;
  id: string;
}

const jwt = require('jsonwebtoken');
const loginRepo = require('./db');
const { checkHashedPassword } = require('./hashHelper');

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const { JWT_SECRET_KEY } = process.env;

const be = (user: object) => {
  const { id, login }: any = user;
  const token = jwt.sign({ id, login }, JWT_SECRET_KEY, { expiresIn: '10m' });
  return token;
};

const signToken = async (login: any, password: any) => {
  const user: Iuser = loginRepo.getByProps({ login });

  if (!user) {
    return null;
  }
  const { password: hashedPassword } = user;

  const comparisonRes = await checkHashedPassword(password, hashedPassword);

  if (comparisonRes) {
    return be(user);
  }

  return null;
};

module.exports = {
  signToken,
};
