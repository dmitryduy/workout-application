import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class AddExerciseInfoDto {
  @ArrayNotEmpty({ message: 'Добавьте повторения' })
  reps: number[];

  @ArrayNotEmpty({ message: 'Добавьте самочувствие' })
  moods: string[];

  @IsArray({ message: 'Добавьте пустой массив весов' })
  weights: number[];

  @IsNumber({}, { message: 'Количество сетов должно быть числом' })
  sets: number;

  @IsNumber({}, { message: 'Id должно быть числом' })
  exerciseId: number;
}
