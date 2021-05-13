const uuid = require('uuid').v4;

class Task  {
  constructor({
    id = uuid(),
    title = "title",
    order = "order",
    description = "description",
    userId = "userId",
    // boardId = "boardId",
    columnId = "columnId"
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    // this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(user) {
    const { id, title, order } = user;
    return { id, title, order };
  }

  static fromRequest(body) {
    return new Task (body);
  }
}

module.exports = Task ;
