import { Injectable } from '@nestjs/common';
import { ProfileSettingService } from '../settings/profile/services/profile-setting.service';
import { UserSettingService } from '../settings/user/services/user-setting.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserOnBoardingDto } from './dto/user-onboarding.dto';
import { UserRating } from './entities/user-rating.entity';
import { User } from './entities/user.entity';
import { UserRatingRepository } from './repositories/user-rating.repository';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private userRatingRepository: UserRatingRepository,
    private profileSettingService: ProfileSettingService,
    private userSettingService: UserSettingService,
  ) {}
  async createUser(
    userDetail: UserOnBoardingDto,
    boardingUser,
  ): Promise<User | string> {
    if (await this.userRepository.findOne(boardingUser.uid)) {
      return 'User Already exist';
    }
    const user = await this.generateUser(userDetail, boardingUser);
    await Promise.all([
      // Create user profile settings
      this.profileSettingService.createProfileSetting(user),

      // Create user setting
      this.userSettingService.createUserSetting(user),
    ]);
    this.createUserNodeWithOtherUser(user.id);
    return user;
  }

  async generateUser(userDetail: UserOnBoardingDto, boardingUser) {
    const user = new User();
    user.id = boardingUser.uid;
    user.firstName = userDetail.firstName;
    user.lastName = userDetail.lastName;
    user.dateOfBirth = userDetail.dateOfBirth;
    user.gender = userDetail.gender;
    user.phone = userDetail.phone;
    user.profileLink = userDetail.profileLink;

    return await this.userRepository.save(user);
  }

  async createUserNodeWithOtherUser(userId: string) {
    const userIds = await this.userRepository.getAllUserId(userId);
    const filterUserIds = userIds.map((item) => item.id);

    const userRatings = [];
    filterUserIds.forEach((item) => {
      const userRating = new UserRating();
      userRating.fromUserId = userId;
      userRating.toUserId = item;
      userRatings.push(userRating);
    });
    this.userRatingRepository.insert(userRatings);
  }

  async updateUser(userDetail: UpdateUserDto, user) {
    return this.userRepository.update(user.id, userDetail);
  }

  async likeAction(fromUserId, toUserId) {
    return this.userRatingRepository.incrementLike(fromUserId, toUserId);
  }

  async disLikeAction(fromUserId, toUserId) {
    return this.userRatingRepository.incrementDisLike(fromUserId, toUserId);
  }

  async superLikeAction(fromUserId, toUserId) {
    return this.userRatingRepository.incrementSuperLike(fromUserId, toUserId);
  }
}
