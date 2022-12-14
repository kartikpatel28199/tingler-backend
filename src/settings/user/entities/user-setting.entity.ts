import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../../user/entities/user.entity';
import { DistanceType } from '../../enums/distanceType';
import { Interested } from '../../enums/interested';
import { Toggle } from '../../enums/toggle';

@Entity()
export class UserSetting {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  user: User;

  @Column()
  userId: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column({ default: Toggle.True })
  global: Toggle;

  @Column()
  distanceRange: string;

  @Column()
  showMe: Interested;

  @Column()
  age_min: number;

  @Column()
  age_max: number;

  @Column({ default: Toggle.True })
  tinglerAlert: Toggle;

  @Column({ default: Toggle.True })
  showProfilePic: Toggle;

  @Column({ default: Toggle.True })
  showActivityStatus: Toggle;

  @Column({ default: DistanceType.Kilometer })
  distanceType: DistanceType;

  @Column()
  notification: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date;
}
