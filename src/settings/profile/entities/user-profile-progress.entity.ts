import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../../user/entities/user.entity';
import { ProfileProgressStep } from './profile-progress-step.entity';

@Entity()
export class UserProfileProgress {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: User;

  @Column()
  userId: string;

  @ManyToOne(() => ProfileProgressStep)
  profileProgressStep: ProfileProgressStep;

  @Column({ default: null })
  profileProgressStepId: number;

  @Column({ default: false })
  isCompleted: boolean;
}
