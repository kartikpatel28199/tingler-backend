import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Interested } from '../../enums/interested';
import { Toggle } from '../../enums/toggle';

export class UpdateProfileSettingDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  aboutMe?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  passion?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  jobTitle?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  company?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  school?: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  city?: string;

  @ApiPropertyOptional({ enum: Interested })
  @IsEnum(Interested)
  @IsOptional()
  interested?: Interested;

  @ApiPropertyOptional({ enum: Toggle })
  @IsEnum(Toggle)
  @IsOptional()
  showGender?: Toggle;

  @ApiPropertyOptional({ enum: Toggle })
  @IsEnum(Toggle)
  @IsOptional()
  showAge?: Toggle;

  @ApiPropertyOptional({ enum: Toggle })
  @IsEnum(Toggle)
  @IsOptional()
  showDistance?: Toggle;
}
