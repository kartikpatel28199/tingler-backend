import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum } from 'class-validator';
import { ProfileProgressSteps } from '../../enums/profile-progress-steps';

export class UpdateProfileProgressDto {
  @ApiProperty({ enum: ProfileProgressSteps })
  @IsEnum(ProfileProgressSteps)
  step: ProfileProgressSteps;

  @ApiProperty()
  @IsBoolean()
  isCompleted: boolean;
}
