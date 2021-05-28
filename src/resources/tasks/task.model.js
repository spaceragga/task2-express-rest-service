const uuid = require('uuid').v4;
/**
 * Creates a new Task.
 * @class {Object} Task in db
 */
class Task {
    /**
   *
   * @param id {string} Id of a task
   * @param title {string} Title of a task
   * @param order {number} order of a task
   * @param description {string} description of a task
   * @param userId {string|Null} Id of a user
   * @param boardId {string|Null} Id of a board
   * @param columnId {string|Null} Id of a column
   */
  constructor({
    id = uuid(),
    title = 'TITLE',
    order = 0,
    description = 'DESCRIPTION',
    userId = null,
    boardId = null,
    columnId = null,
  } = {}) {
        /**
     *
     * @property id {string} Id of a task
     * @property title {string} Title of a task
     * @property order {number} order of a task
     * @property description {string} description of a task
     * @property userId {string|Null} Id of a user
     * @property boardId {string|Null} Id of a board
     * @property columnId {string|Null} Id of a column
     */
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
    /**
   * static returns only valid properties
   * @static
   * @param user {Object} task object
   * @returns {Object} return object task
   */

  static toResponse(task) {
    return { ...task };
  }
}

module.exports = Task;
