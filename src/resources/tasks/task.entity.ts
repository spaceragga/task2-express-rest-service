import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

const uuidTask = require('uuid').v4;

@Entity({ name: 'tasks' })
class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidTask();

  @Column('varchar')
  title: string = 'Task';

  @Column('integer')
  order: number = 0;

  @Column('text')
  description: string = '';

  @Column('varchar', { length: 40, nullable: true })
  userId!: string | null;

  @Column('varchar', { length: 40, nullable: true })
  boardId!: string | null;

  @Column('varchar', { length: 40, nullable: true })
  columnId!: string | null;

  static toResponse(task: object) {
    return { ...task };
  }
}

module.exports = Task;