import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum, IsJSON, IsString } from 'class-validator';
import { Gender } from '../enum/gender';

export class UserOnBoardingDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty({ enum: Gender })
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsDate()
  dateOfBirth: Date;

  @ApiProperty()
  @IsString()
  profileLink: string;

  @ApiProperty()
  @IsJSON()
  interests: JSON;
}
