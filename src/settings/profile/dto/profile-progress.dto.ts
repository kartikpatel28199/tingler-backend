import { IsBoolean, IsEnum } from 'class-validator';
import { ProfileProgressSteps } from '../../enums/profile-progress-steps';

export class UpdateProfileProgressDto {
  @IsEnum(ProfileProgressSteps)
  step: ProfileProgressSteps;

  @IsBoolean()
  isCompleted: boolean;
}
