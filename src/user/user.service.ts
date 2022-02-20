import { Injectable } from '@nestjs/common';
import { ProfileSettingService } from '../settings/profile/services/profile-setting.service';
import { UserSettingService } from '../settings/user/services/user-setting.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserOnBoardingDto } from './dto/user-onboarding.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private profileSettingService: ProfileSettingService,
    private userSettingService: UserSettingService,
  ) {}
  async createUser(userDetail: UserOnBoardingDto): Promise<User> {
    const user = await this.generateUser(userDetail);
    await Promise.all([
      // Create user profile settings
      this.profileSettingService.createProfileSetting(user),

      // Create user setting
      this.userSettingService.createUserSetting(user),
    ]);
    return user;
  }

  async generateUser(userDetail: UserOnBoardingDto) {
    const user = new User();
    user.firstName = userDetail.firstName;
    user.lastName = userDetail.lastName;
    user.dateOfBirth = userDetail.dateOfBirth;
    user.gender = userDetail.gender;
    user.phone = userDetail.phone;
    user.profileLink = userDetail.profileLink;

    return await this.userRepository.save(userDetail);
  }

  async updateUser(user: UpdateUserDto) {
    return this.userRepository.update(user.id, user);
  }
}
