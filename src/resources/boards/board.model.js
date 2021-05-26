const uuid = require('uuid').v4;
/**
 * Creates a new Board.
 * @class {Object} Board in db
 */
class Board {
  constructor({
    id = uuid(),
    title = 'TITLE',
    columns = [
      {
        id: uuid(),
        title: 'Column Title',
        order: 0,
      },
    ],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
