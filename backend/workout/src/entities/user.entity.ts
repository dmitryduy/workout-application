import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { UserExerciseEntity } from './userExercise.entity';

@Entity()
export class UserEntity {
  @PrimaryColumn()
  login: string;

  @Column()
  password: string;

  @Column({ default: false })
  isAdmin: boolean;

  @OneToMany(() => UserExerciseEntity, (userExercise) => userExercise.user, {
    eager: true,
  })
  exercises: UserExerciseEntity[];
}
