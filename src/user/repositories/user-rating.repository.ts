import { EntityRepository, Repository } from 'typeorm';
import { UserRating } from '../entities/user-rating.entity';

@EntityRepository(UserRating)
export class UserRatingRepository extends Repository<UserRating> {
  async incrementLike(fromUserId, toUserId) {
    this.createQueryBuilder()
      .update()
      .where(
        'user_rating.fromUserId = :fromUser AND user_rating.toUserId = :toUser',
        {
          fromUser: fromUserId,
          toUser: toUserId,
        },
      )
      .set({ likes: () => 'likes + 1' })
      .execute();
  }

  async incrementDisLike(fromUserId, toUserId) {
    this.createQueryBuilder('rating')
      .update(UserRating)
      .where(
        'user_rating.fromUserId = :fromUser AND user_rating.toUserId = :toUser',
        {
          fromUser: fromUserId,
          toUser: toUserId,
        },
      )
      .set({ disLikes: () => 'disLikes + 1' })
      .execute();
  }

  async incrementSuperLike(fromUserId, toUserId) {
    this.createQueryBuilder('rating')
      .update(UserRating)
      .where(
        'user_rating.fromUserId = :fromUser AND user_rating.toUserId = :toUser',
        {
          fromUser: fromUserId,
          toUser: toUserId,
        },
      )
      .set({ superLikes: () => 'superLikes + 1' })
      .execute();
  }
}
