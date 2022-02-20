import { Injectable } from '@nestjs/common';
import { User } from '../../../user/entities/user.entity';
import { UserSetting } from '../entities/user-setting.entity';
import { UserSettingsRepository } from '../repositories/user-settings.repository';

@Injectable()
export class UserSettingService {
  constructor(private userSettingsRepository: UserSettingsRepository) {}

  async createUserSetting(user: User) {
    console.log('userid', user.id);
    const userSetting = new UserSetting();
    userSetting.userId = user.id;
    await this.userSettingsRepository.save(userSetting);
  }

  async updateUserSetting(setting) {
    return await this.userSettingsRepository.update(setting.id, setting);
  }
}
