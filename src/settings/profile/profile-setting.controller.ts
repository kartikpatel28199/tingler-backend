import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { GetUser } from '../../common/decorator/get-user.decorator';
import { FirebaseAuthGuard } from '../../common/guard/firebase-auth.guard';
import { User } from '../../user/entities/user.entity';
import { UpdateProfileProgressDto } from './dto/profile-progress.dto';
import { UpdateProfileSettingDto } from './dto/update-profile-setting.dto';
import { ProfileSettingService } from './services/profile-setting.service';
import { UserProfileProgressService } from './services/user-profile-progress.service';
@UseGuards(FirebaseAuthGuard)
@Controller('profile-setting')
export class ProfileSettingController {
  constructor(
    private profileSettingService: ProfileSettingService,
    private userProfileProgressService: UserProfileProgressService,
  ) {}

  @Patch('/')
  async updateSetting(
    @Body() setting: UpdateProfileSettingDto,
    @GetUser() user,
  ) {
    return await this.profileSettingService.updateProfileSetting(setting, user);
  }

  @Patch('/progress')
  updateUserProfileProgressStatus(
    @Body() { step, isCompleted }: UpdateProfileProgressDto,
    @GetUser() user,
  ) {
    return this.userProfileProgressService.updateUserProfileProgressStatus(
      user,
      step,
      isCompleted,
    );
  }
}
