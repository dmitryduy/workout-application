import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class AuthDto {
  @IsNotEmpty({ message: 'Введите логин' })
  login: string;

  @IsNotEmpty({ message: 'Введите пароль' })
  @MinLength(8, {
    message: 'Минимальная длина пароля должна быть $constraint1',
  })
  @MaxLength(20, {
    message: 'Максимальная длина пароля должна быть $constraint1',
  })
  password: string;
}
