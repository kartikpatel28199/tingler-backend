import { Body, Controller, Get, Patch } from '@nestjs/common';
import { GetUser } from '../../common/decorator/get-user.decorator';
import { UpdateProfileSettingDto } from './dto/update-profile-setting.dto';
import { ProfileSettingService } from './services/profile-setting.service';

@Controller('profile-setting')
export class ProfileSettingController {
  constructor(private profileSettingService: ProfileSettingService) {}

  @Patch('/')
  async updateSetting(
    @Body() setting: UpdateProfileSettingDto,
    @GetUser() user,
  ) {
    return this.profileSettingService.updateProfileSetting(setting, user);
  }
}
