import { getManager } from "typeorm";

const bcrypt = require('bcrypt');
const User = require('../resources/users/user.entity');

export const checkAuth = async (user: typeof User) => {
    const { login, password } = user;
    const userRepository = getManager().getRepository(User);

    const newUser: typeof User = await userRepository.findOne({login});
    
    if (newUser && await bcrypt.compare(String(password), String(newUser.password))) {
        return newUser;
    }
    return false;
}