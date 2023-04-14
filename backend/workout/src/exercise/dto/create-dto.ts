import { IsNotEmpty } from 'class-validator';

export class CreateDto {
  @IsNotEmpty({ message: 'Имя упражнения не должно быть пустым' })
  name: string;

  @IsNotEmpty({ message: 'URL фотографии не должно быть пустым' })
  photoUrl: string;
}
