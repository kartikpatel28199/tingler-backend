import { EntityRepository, Repository } from 'typeorm';
import { ProfileSetting } from '../entities/profile-setting.entity';

@EntityRepository(ProfileSetting)
export class ProfileSettingRepository extends Repository<ProfileSetting> {}
