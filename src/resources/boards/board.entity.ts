import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import BoardColumn from '../columns/column.entity';

const uuidBoard = require('uuid').v4;


@Entity({ name: 'boards' })
class Board {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidBoard();

  @Column('varchar')
  title: string = 'Board';

  @Column('jsonb')
  columns: BoardColumn[] = [];

  static toResponse(board: Omit<Board, 'id'>) {
    return board;
  }
}

module.exports = Board;