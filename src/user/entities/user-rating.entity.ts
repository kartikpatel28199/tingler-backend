import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserRating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fromUserId: string;

  @Column()
  toUserId: string;

  @Column()
  likes: number;

  @Column()
  disLikes: number;

  @Column()
  superLikes: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date;
}
