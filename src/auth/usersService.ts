const userRepo = require('./db');

const getAllUserDB = () => userRepo.getAll();
const getUserDB = (id: string) => userRepo.getById(id);
const createUserDB = (data: object) => userRepo.createUserLogin(data);

module.exports = {
    getAllUserDB,
    getUserDB,
    createUserDB
};