import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../../user/entities/user.entity';
import { Interested } from '../../enums/interested';
import { Toggle } from '../../enums/toggle';

@Entity()
export class ProfileSetting {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: User;

  @Column()
  userId: number;

  @Column()
  aboutMe: string;

  @Column()
  passion: string;

  @Column()
  jobTitle: string;

  @Column()
  company: string;

  @Column()
  school: string;

  @Column()
  city: string;

  @Column()
  interested: Interested;

  @Column({ default: Toggle.True })
  showGender: Toggle;

  @Column({ default: Toggle.True })
  showAge: Toggle;

  @Column({ default: Toggle.True })
  showDistance: Toggle;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date;
}