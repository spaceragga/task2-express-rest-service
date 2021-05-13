const uuid = require('uuid').v4;

class Board  {
  constructor({
    id = uuid(),
    title = 'Title',
    columns = [
      {
        id: uuid(),
        title: "Column Title",
        order: 0
      }
    ],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(user) {
    const { id, title, columns } = user;
    return { id, title, columns };
  }

  static fromRequest(body) {
    return new Board (body);
  }
}

module.exports = Board ;
