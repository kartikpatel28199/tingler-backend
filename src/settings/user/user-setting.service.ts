import { Injectable } from '@nestjs/common';
import { User } from '../../user/entities/user.entity';
import { UserSetting } from './entities/user-setting.entity';
import { UserSettingsRepository } from './repositories/user-setting.repository';

@Injectable()
export class UserSettingService {
  constructor(private userSettingsRepository: UserSettingsRepository) {}

  async createUserSetting(user: User) {
    const userSetting = new UserSetting();
    userSetting.userId = user.id;
    return this.userSettingsRepository.save(userSetting);
  }

  async updateUserSetting(setting, user) {
    return await this.userSettingsRepository.update(
      { userId: user.uid },
      setting,
    );
  }

  async updateLocation(location, user) {
    this.userSettingsRepository.update({ userId: user.uid }, location);
  }
}
