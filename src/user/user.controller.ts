import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GetUser } from '../common/decorator/get-user.decorator';
import { FirebaseAuthGuard } from '../common/guard/firebase-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserActionDto } from './dto/user-action.dto';
import { UserOnBoardingDto } from './dto/user-onboarding.dto';
import { UserService } from './user.service';

@UseGuards(FirebaseAuthGuard)
@ApiBearerAuth()
@ApiTags('user')
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
    return this.userService.blockContact(userId, user);
  }

  @Patch('/like-action')
  async likeAction(@Body() body: UserActionDto, @GetUser() user) {
    return this.userService.likeAction(user, body.toUserId);
  }

  @Patch('/disLike-action')
  async disLikeAction(@Body() body: UserActionDto, @GetUser() user) {
    return this.userService.disLikeAction(user, body.toUserId);
  }

  @Patch('/superLike-action')
  async superLikeAction(@Body() body: UserActionDto, @GetUser() user) {
    return this.userService.superLikeAction(user, body.toUserId);
  }

  @Get('/discover')
  async discoverUser(@GetUser() user) {
    return this.userService.discover(user);
  }
}
