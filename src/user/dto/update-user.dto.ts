import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDate, IsEnum, IsJSON, IsOptional, IsString } from 'class-validator';
import { Gender } from '../enum/gender';

export class UpdateUserDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiPropertyOptional()
  @IsString()
  lastName?: string;

  @ApiPropertyOptional({ enum: Gender })
  @IsEnum(Gender)
  gender?: Gender;

  @ApiPropertyOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional()
  @IsString()
  email?: string;

  @ApiPropertyOptional()
  @IsDate()
  dateOfBirth?: Date;

  @ApiPropertyOptional()
  @IsString()
  profileLink?: string;

  @ApiPropertyOptional()
  @IsJSON()
  interested?;
}
