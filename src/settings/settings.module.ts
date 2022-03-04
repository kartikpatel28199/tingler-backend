import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileSettingController } from './profile/profile-setting.controller';
import { ProfileSettingRepository } from './profile/repositories/profile-setting.repository';
import { ProfileSettingService } from './profile/services/profile-setting.service';
import { UserSettingsRepository } from './user/repositories/user-setting.repository';
import { UserSettingService } from './user/user-setting.service';
import { UserSettingController } from './user/user-setting.controller';
import { UserProfileProgressRepository } from './profile/repositories/user-profile-progress.repository';
import { ProfileProgressStepRepository } from './profile/repositories/profile-progress-step.repository';
import { UserProfileProgressService } from './profile/services/user-profile-progress.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProfileSettingRepository,
      UserSettingsRepository,
      UserProfileProgressRepository,
      ProfileProgressStepRepository,
    ]),
  ],
  controllers: [UserSettingController, ProfileSettingController],
  providers: [
    UserSettingService,
    ProfileSettingService,
    UserProfileProgressService,
  ],
  exports: [
    UserSettingService,
    ProfileSettingService,
    UserProfileProgressService,
  ],
})
export class SettingsModule {}
