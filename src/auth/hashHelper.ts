const bcrypt = require('bcrypt');

const DEFAULT_SALT_ROUNDS = 10;

export const hashPassword = async (password: any) => {
  const salt = await bcrypt.genSalt(DEFAULT_SALT_ROUNDS);
  console.log('SALT:');
  console.log(salt);
  const hash = await bcrypt.hash(password, salt);
  console.log('HASH:');
  console.log(hash);

  return hash;
};

export const checkHashedPassword = async (password: any, hash: any) =>
  bcrypt.compare(password, hash);
