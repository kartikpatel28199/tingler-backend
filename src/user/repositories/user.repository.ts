import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async saveUser(user: User): Promise<User> {
    return this.save(user);
  }

  async discoverUser(user) {
    const query = `
    SELECT *, TIMESTAMPDIFF(YEAR, dateOfBirth, CURDATE()) as Age FROM user 
      INNER JOIN profile_setting on user.id = profile_setting.userId AND profile_setting.deletedAt is null
      inner join user_setting on user.id = user_setting.userId AND user_setting.deletedAt is null
    where user.deletedAt is NULL 
    HAVING age>=user_setting.age_min and age <=user_setting.age_max
    `;
    // AND user.id != '${user.uid}'
    const result = await this.query(query);
    return result;
  }

  async getAllUserId(userId) {
    return this.createQueryBuilder('user')
      .select(['user.id'])
      .where('user.id != :id', { id: userId })
      .getMany();
  }
}
