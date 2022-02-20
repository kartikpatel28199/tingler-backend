import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserOnBoardingDto } from './dto/user-onboarding.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  async createUser(user: UserOnBoardingDto): Promise<User> {
    return this.userRepository.save(user);
  }

  async updateUser(user: UpdateUserDto) {
    return this.userRepository.update(user.id, user);
  }
}
