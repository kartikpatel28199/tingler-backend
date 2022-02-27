import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class BlockContact {
  @ManyToMany(() => User)
  user: User;

  @PrimaryColumn()
  userId: string;

  @ManyToMany(() => User)
  blockedContact: User;

  @PrimaryColumn()
  blockedContactId: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date;
}
