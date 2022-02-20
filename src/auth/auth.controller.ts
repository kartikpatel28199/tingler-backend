import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}
  @Post('signup')
  async signUp(@Body() body) {
    return await this.userService.createUser(body);
  }
}
