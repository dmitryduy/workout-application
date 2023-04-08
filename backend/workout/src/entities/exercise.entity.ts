import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExerciseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  photoUrl: string;
}
