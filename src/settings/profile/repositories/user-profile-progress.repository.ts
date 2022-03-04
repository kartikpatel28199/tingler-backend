import { EntityRepository, Repository } from 'typeorm';
import { UserProfileProgress } from '../entities/user-profile-progress.entity';

@EntityRepository(UserProfileProgress)
export class UserProfileProgressRepository extends Repository<UserProfileProgress> {}
