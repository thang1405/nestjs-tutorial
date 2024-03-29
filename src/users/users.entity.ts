import { EBaseEntity } from 'src/common/mysql/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends EBaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({ type: 'enum', enum: ['admin', 'group'] })
  roles: string;
}
