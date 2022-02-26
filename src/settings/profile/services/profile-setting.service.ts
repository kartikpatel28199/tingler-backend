import { Injectable } from '@nestjs/common';
import { User } from '../../../user/entities/user.entity';
import { UpdateProfileSettingDto } from '../dto/update-profile-setting.dto';
import { ProfileSetting } from '../entities/profile-setting.entity';
import { ProfileSettingRepository } from '../repositories/profile-setting.repository';

@Injectable()
export class ProfileSettingService {
  constructor(private profileSettingRepository: ProfileSettingRepository) {}

  async createProfileSetting(user: User) {
    const profileSetting = new ProfileSetting();
    profileSetting.userId = user.id;
    await this.profileSettingRepository.save(profileSetting);
  }

  async updateProfileSetting(setting: UpdateProfileSettingDto, user) {
    return await this.profileSettingRepository.update(user.id, setting);
  }
}
