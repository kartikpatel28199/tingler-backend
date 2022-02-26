import { IsDate, IsEnum, IsJSON, IsOptional, IsString } from 'class-validator';
import { Gender } from '../enum/gender';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  lastName?: string;

  @IsEnum(Gender)
  gender?: Gender;

  @IsString()
  phone?: string;

  @IsString()
  email?: string;

  @IsDate()
  dateOfBirth?: Date;

  @IsString()
  profileLink?: string;

  @IsJSON()
  interested?;
}
