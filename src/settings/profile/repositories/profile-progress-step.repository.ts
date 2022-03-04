import { EntityRepository, Repository } from 'typeorm';
import { ProfileProgressStep } from '../entities/profile-progress-step.entity';

@EntityRepository(ProfileProgressStep)
export class ProfileProgressStepRepository extends Repository<ProfileProgressStep> {}
