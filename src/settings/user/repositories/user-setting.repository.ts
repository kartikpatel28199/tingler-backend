import { EntityRepository, Repository } from 'typeorm';
import { UserSetting } from '../entities/user-setting.entity';

@EntityRepository(UserSetting)
export class UserSettingsRepository extends Repository<UserSetting> {}
