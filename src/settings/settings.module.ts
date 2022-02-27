import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileSettingController } from './profile/profile-setting.controller';
import { ProfileSettingRepository } from './profile/repositories/profile-setting.repository';
import { ProfileSettingService } from './profile/services/profile-setting.service';
import { UserSettingsRepository } from './user/repositories/user-setting.repository';
import { UserSettingService } from './user/user-setting.service';
import { UserSettingController } from './user/user-setting.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProfileSettingRepository,
      UserSettingsRepository,
    ]),
  ],
  controllers: [UserSettingController, ProfileSettingController],
  providers: [UserSettingService, ProfileSettingService],
  exports: [UserSettingService, ProfileSettingService],
})
export class SettingsModule {}
