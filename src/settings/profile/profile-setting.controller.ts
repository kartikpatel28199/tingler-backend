import { Body, Controller, Get, Patch } from '@nestjs/common';
import { UpdateProfileSettingDto } from './dto/update-profile-setting.dto';
import { ProfileSettingService } from './services/profile-setting.service';

@Controller('profile-setting')
export class ProfileSettingController {
  constructor(private profileSettingService: ProfileSettingService) {}
  @Get('ping')
  pong() {
    return 'pong';
  }

  @Patch('/')
  async updateSetting(@Body() setting: UpdateProfileSettingDto) {
    return this.profileSettingService.updateProfileSetting(setting);
  }
}
