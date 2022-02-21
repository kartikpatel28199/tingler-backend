import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async saveUser(user: User): Promise<User> {
    return this.save(user);
  }

  async getAllUserId(userId) {
    return this.createQueryBuilder('user')
      .select(['user.id'])
      .where('user.id != :id', { id: userId })
      .getMany();
  }
}
