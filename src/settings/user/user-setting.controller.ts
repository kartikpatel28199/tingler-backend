import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from '../../common/guard/firebase-auth.guard';
import { UserSettingService } from './services/user-setting.service';
import * as firebase from 'firebase-admin';
import { GetUser } from '../../common/decorator/get-user.decorator';

@Controller('user-setting')
export class UserSettingController {
  constructor(private userSettingService: UserSettingService) {}

  @Get('/ping')
  pong(@GetUser() user) {
    return 'pong';
  }

  @UseGuards(FirebaseAuthGuard)
  @Patch('/')
  async updateUserSetting(@Body() setting) {
    return this.userSettingService.updateUserSetting(setting);
  }
}
