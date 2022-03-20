import { Interested } from '../../enums/interested';
import { Toggle } from '../../enums/toggle';

export class UpdateProfileSettingDto {
  aboutMe?: string;
  passion?: string;
  jobTitle?: string;
  company?: string;
  school?: string;
  city?: string;
  interested?: Interested;
  showGender?: Toggle;
  showAge?: Toggle;
  showDistance?: Toggle;
}
