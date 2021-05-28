const uuid = require('uuid').v4;
/**
 * Creates a new Board.
 * @class {Object} Board in db
 */
class Board {
    /**
   * @param id {string} id of a board
   * @param title {string} title of a board
   * @param columns {Array} columns of a board
   */
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
        /**
     * @property id {string} id of a board
     * @property title {string} title of a board
     * @property columns {Array} columns of a board
     */
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
