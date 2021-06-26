import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

interface IColumn {
  id: string;
  title?: string;
  order?: number;
}

@Entity({ name: 'boards' })
class Board {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 150 })
  title: string = 'Board';

  @Column('json')
  columns: IColumn[] = [];

  static toResponse(board: Omit<Board, 'id'>) {
    return board;
  }
}

module.exports = Board;