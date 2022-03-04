import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProfileProgressSteps } from '../../enums/profile-progress-steps';
import { UserProfileProgress } from './user-profile-progress.entity';

@Entity()
export class ProfileProgressStep {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  stepName: ProfileProgressSteps;

  @Column()
  order: number;

  @OneToMany(
    () => UserProfileProgress,
    (userProfileProgress) => userProfileProgress.profileProgressStep,
  )
  userProfileProgress: UserProfileProgress[];
}
