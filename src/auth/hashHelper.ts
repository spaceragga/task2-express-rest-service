const bcrypt = require('bcrypt');

const DEFAULT_SALT_ROUNDS = 10;

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(DEFAULT_SALT_ROUNDS);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export const checkHashedPassword = async (password: string, hash: string) =>
  bcrypt.compare(password, hash);
