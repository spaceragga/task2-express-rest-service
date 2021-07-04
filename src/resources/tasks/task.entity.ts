import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

const Board = require('../boards/board.entity');
const User = require('../users/user.entity');

@Entity({ name: 'tasks' })
class Task {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 150 })
  title: string = 'Task';

  @Column('varchar', { length: 500 })
  description = 'Default Task Description';

  @ManyToOne(() => User, (user: typeof User) => user.id, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  
  @JoinColumn({ name: 'userId' })
  userId: string | null = null;

  @ManyToOne(() => Board, (board: typeof Board) => board.id, {
    nullable: true,
    onDelete: 'CASCADE',
  })

  @JoinColumn({ name: 'boardId' })
  boardId: string | null = null;

  @Column('text', { nullable: true })
  columnId: string | null = null;

  @Column('integer')
  order = 0;

  static toResponse(task: object) {
    return { ...task };
  }
}

module.exports = Task;