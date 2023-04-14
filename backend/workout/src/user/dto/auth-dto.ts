import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class AuthDto {
  @IsNotEmpty({ message: 'Введите логин' })
  @MinLength(5, {
    message: 'Минимальная длина логина должна быть $constraint1',
  })
  @MaxLength(15, {
    message: 'Максимальная длина логина должна быть $constraint1',
  })
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
