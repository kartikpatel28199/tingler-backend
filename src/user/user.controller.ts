import { Body, Controller, Patch, Post, UseGuards } from '@nestjs/common';
import { GetUser } from '../common/decorator/get-user.decorator';
import { FirebaseAuthGuard } from '../common/guard/firebase-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserOnBoardingDto } from './dto/user-onboarding.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(FirebaseAuthGuard)
  @Post('/onBoarding')
  async signUp(@Body() body: UserOnBoardingDto, @GetUser() user) {
    return await this.userService.createUser(body, user);
  }

  @Patch('/')
  async updateUser(@Body() body: UpdateUserDto, @GetUser() user) {
    return await this.userService.updateUser(body, user);
  }

  @Patch('/like-action')
  async likeAction(@Body() { fromUserId, toUserId }) {
    return this.userService.likeAction(fromUserId, toUserId);
  }

  @Patch('/disLike-action')
  async disLikeAction(@Body() { fromUserId, toUserId }) {
    return this.userService.disLikeAction(fromUserId, toUserId);
  }

  @Patch('/superLike-action')
  async superLikeAction(@Body() { fromUserId, toUserId }) {
    return this.userService.superLikeAction(fromUserId, toUserId);
  }
}
