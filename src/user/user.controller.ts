import { Body, Controller, Patch, Post } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserOnBoardingDto } from './dto/user-onboarding.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/onBoarding')
  async signUp(@Body() body: UserOnBoardingDto) {
    return await this.userService.createUser(body);
  }

  @Patch('/')
  async updateUser(@Body() body: UpdateUserDto) {
    return await this.userService.updateUser(body);
  }
}
