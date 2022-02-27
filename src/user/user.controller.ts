import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../common/decorator/get-user.decorator';
import { FirebaseAuthGuard } from '../common/guard/firebase-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserOnBoardingDto } from './dto/user-onboarding.dto';
import { UserService } from './user.service';

@UseGuards(FirebaseAuthGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/onBoarding')
  async signUp(@Body() body: UserOnBoardingDto, @GetUser() user) {
    return await this.userService.createUser(body, user);
  }

  @Patch('/')
  async updateUser(@Body() body: UpdateUserDto, @GetUser() user) {
    return await this.userService.updateUser(body, user);
  }

  @Post('/block/:userId')
  async blockUser(@Param() { userId }, @GetUser() user) {
    console.log('user', user);
    return this.userService.blockContact(userId, user);
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

  @Get('/discover')
  async discoverUser(@GetUser() user) {
    return this.userService.discover(user);
  }
}
