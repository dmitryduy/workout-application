import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity()
export class UserExerciseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @CreateDateColumn()
  date: Date;

  @Column()
  reps: string;

  @Column()
  weights: string;

  @Column()
  moods: string;

  @ManyToOne(() => UserEntity, (user) => user.exercises)
  user: UserEntity;
}
