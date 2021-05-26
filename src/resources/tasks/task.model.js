const uuid = require('uuid').v4;
/**
 * Creates a new Task.
 * @class {Object} Task in db
 */
class Task {
  constructor({
    id = uuid(),
    title = 'TITLE',
    order = 0,
    description = 'DESCRIPTION',
    userId = null,
    boardId = null,
    columnId = null,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    return { ...task };
  }
}

module.exports = Task;
