import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { DistanceType } from '../../enums/distanceType';
import { Interested } from '../../enums/interested';
import { Toggle } from '../../enums/toggle';

export class UserSettingDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  latitude?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  longitude?: string;

  @ApiPropertyOptional()
  @IsEnum(Toggle)
  @IsOptional()
  global?: Toggle;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  distanceRange?: string;

  @ApiPropertyOptional({ enum: Interested })
  @IsEnum(Interested)
  @IsOptional()
  showMe?: Interested;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  age_min?: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  age_max?: number;

  @ApiPropertyOptional({ enum: Toggle })
  @IsEnum(Toggle)
  @IsOptional()
  tinglerAlert?: Toggle;

  @ApiPropertyOptional({ enum: Toggle })
  @IsEnum(Toggle)
  @IsOptional()
  showProfilePic?: Toggle;

  @ApiPropertyOptional({ enum: Toggle })
  @IsEnum(Toggle)
  @IsOptional()
  showActivityStatus?: Toggle;

  @ApiPropertyOptional({ enum: Toggle })
  @IsEnum(Toggle)
  @IsOptional()
  distanceType?: DistanceType;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  notification?: string;
}
