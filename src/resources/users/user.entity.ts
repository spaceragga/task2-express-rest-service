import { Entity, PrimaryColumn, Column } from 'typeorm';

const uuidUser = require('uuid').v4;

@Entity({ name: 'users' })
class User {
  @PrimaryColumn('varchar')
  id: string = uuidUser();

  @Column('varchar', { default: '' })
  name: string = 'USER';

  @Column('varchar')
  login: string = 'user';

  @Column('varchar')
  password: string = 'P@55w0rd';

  static toResponse(user: { id: string; name: string; login: string }) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
