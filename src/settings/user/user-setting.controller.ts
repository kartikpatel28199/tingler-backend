import { Body, Controller, Get, Patch } from '@nestjs/common';
import { UserSettingService } from './services/user-setting.service';

@Controller('user-setting')
export class UserSettingController {
  constructor(private userSettingService: UserSettingService) {}

  @Get('/ping')
  pong() {
    return 'pong';
  }

  @Patch('/')
  async updateUserSetting(@Body() setting) {
    return this.userSettingService.updateUserSetting(setting);
  }
}
