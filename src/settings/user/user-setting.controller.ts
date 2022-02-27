import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { GetUser } from '../../common/decorator/get-user.decorator';
import { FirebaseAuthGuard } from '../../common/guard/firebase-auth.guard';
import { UserSettingService } from './user-setting.service';

@Controller('user-setting')
export class UserSettingController {
  constructor(private userSettingService: UserSettingService) {}

  @UseGuards(FirebaseAuthGuard)
  @Patch('/')
  async updateUserSetting(@Body() setting, @GetUser() user) {
    return this.userSettingService.updateUserSetting(setting, user);
  }
}
