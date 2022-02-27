import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockContactModule } from '../block-contact/block-contact.module';
import { SettingsModule } from '../settings/settings.module';
import { UserRatingRepository } from './repositories/user-rating.repository';
import { UserRepository } from './repositories/user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository, UserRatingRepository]),
    SettingsModule,
    BlockContactModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
