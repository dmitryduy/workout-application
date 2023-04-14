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
  id: number;

  @Column()
  exerciseId: number;

  @CreateDateColumn()
  date: Date;

  @Column()
  reps: string;

  @Column({ nullable: true })
  weights: string;

  @Column()
  moods: string;

  @ManyToOne(() => UserEntity, (user) => user.exercises)
  user: UserEntity;
}
