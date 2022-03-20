import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GetUser } from '../../common/decorator/get-user.decorator';
import { FirebaseAuthGuard } from '../../common/guard/firebase-auth.guard';
import { UserSettingDto } from './dto/user-setting.dto';
import { UserSettingService } from './user-setting.service';

@ApiBearerAuth()
@ApiTags('user-setting')
@Controller('user-setting')
export class UserSettingController {
  constructor(private userSettingService: UserSettingService) {}

  @UseGuards(FirebaseAuthGuard)
  @Patch('/')
  async updateUserSetting(@Body() body: UserSettingDto, @GetUser() user) {
    return this.userSettingService.updateUserSetting({ body }, user);
  }

  @UseGuards(FirebaseAuthGuard)
  @Patch('/location')
  async updateLocation(@Body() location, @GetUser() user) {
    return this.userSettingService.updateLocation({ latitude: '1234' }, user);
  }
}
