import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 150 })
  name: string = 'USER';

  @Column('varchar', { length: 150 })
  login: string = 'login';

  @Column('varchar', { length: 150 })
  password: string = 'P@55w0rd';

  static toResponse(user: { id: string; name: string; login: string }) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
