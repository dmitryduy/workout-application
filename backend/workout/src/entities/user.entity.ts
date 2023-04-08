import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { UserExerciseEntity } from './userExercise';

@Entity()
export class UserEntity {
  @PrimaryColumn()
  login: string;

  @Column()
  password: string;

  @OneToMany(() => UserExerciseEntity, (userExercise) => userExercise.user)
  exercises: UserExerciseEntity[];
}
