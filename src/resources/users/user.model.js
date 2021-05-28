const uuid = require('uuid').v4;
/**
 * Creates a new User.
 * @class {Object} User in db
 */
class User {
  /**
   * @param id {string} Id of a User
   * @param name {string} Name of a user
   * @param login {string} login of a user
   * @param password {string} password of a user
   */
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    /**
     * @property id {string} Id of a User
     * @property name {string} Name of a user
     * @property login {string} login of a user
     * @property password {string} password of a user
     */
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }
  /**
   * static returns only valid properties
   * @static
   * @param user {Object} User object
   * @returns {{name, id, login}} Name, Id and login of a user
   */
  
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
