interface IBaseColumn {
  title: string;
  order: number;
}

// interface IBaseColumnPartial extends Partial<IBaseColumn> {}

interface IColumn extends IBaseColumn {
  id: string;
}

const uuidColumn = require('uuid').v4;

class Column implements IColumn {
  id: string;

  title: string;

  order: number;

  constructor({
    id = uuidColumn(),
    title = 'col',
    order = -1,
  }: Partial<IColumn> = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static async create(payload: IBaseColumn): Promise<IColumn> {
    return new Column(payload);
  }
}

export default Column;
