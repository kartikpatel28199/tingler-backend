import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProfileSetting } from '../../settings/profile/entities/profile-setting.entity';
import { UserSetting } from '../../settings/user/entities/user-setting.entity';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gender: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  profileLink: string;

  @Column({ type: 'json' })
  interests;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date;

  @OneToOne(() => UserSetting, (setting) => setting.user)
  setting: UserSetting;

  @OneToOne(() => ProfileSetting, (profileSetting) => profileSetting.user)
  profileSetting: ProfileSetting;
}
