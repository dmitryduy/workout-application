import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthDto } from './dto/auth-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Errors } from '../common/constants';
import { AddExerciseInfoDto } from './dto/addExerciseInfo-dto';
import { UserExerciseEntity } from '../entities/userExercise.entity';
import { arrayToString, stringToArray } from '../common/helpers/arrayToString';
import { sortDates } from '../common/helpers/sortDates';
import { ExerciseEntity } from '../entities/exercise.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(UserExerciseEntity)
    private userExerciseRepository: Repository<UserExerciseEntity>,
    @InjectRepository(ExerciseEntity)
    private exerciseRepository: Repository<ExerciseEntity>,
    private config: ConfigService,
    private jwtService: JwtService,
  ) {}

  async cryptPassword(password: string) {
    return await bcrypt.hash(password, this.config.get('passwordSalt'));
  }

  async signUserByJwt(user) {
    return {
      login: user.login,
      isAdmin: user.isAdmin,
      token: await this.jwtService.signAsync(
        { login: user.login, isAdmin: user.isAdmin },
        { secret: this.config.get('JWT_SECRET') },
      ),
    };
  }

  async register(registerDto: AuthDto) {
    const userWithSameLogin = await this.userRepository.findOneBy({
      login: registerDto.login,
    });

    if (userWithSameLogin) {
      throw new BadRequestException(Errors.LOGIN_ALREADY_EXISTS);
    }

    const hashPassword = await this.cryptPassword(registerDto.password);
    const user = this.userRepository.create({
      login: registerDto.login,
      password: hashPassword,
    });
    await this.userRepository.save(user);

    return this.signUserByJwt(user);
  }

  async login(loginDto: AuthDto) {
    const user = await this.userRepository.findOneBy({
      login: loginDto.login,
    });

    if (!user) {
      throw new BadRequestException(Errors.INCORRECT_LOGIN_OR_PASSWORD);
    }

    const isPasswordMatch = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordMatch) {
      throw new BadRequestException(Errors.INCORRECT_LOGIN_OR_PASSWORD);
    }

    return this.signUserByJwt(user);
  }

  async addExerciseInfo(exerciseDataDto: AddExerciseInfoDto, login: string) {
    const user = await this.userRepository.findOneBy({ login });

    const exerciseData = this.userExerciseRepository.create({
      exerciseId: +exerciseDataDto.exerciseId,
      moods: arrayToString(exerciseDataDto.moods),
      reps: arrayToString(exerciseDataDto.reps),
      weights: arrayToString(exerciseDataDto.weights),
    });

    await this.userExerciseRepository.save(exerciseData);

    user.exercises
      ? user.exercises.push(exerciseData)
      : (user.exercises = [exerciseData]);

    await this.userRepository.save(user);

    return { message: 'Запись о тренеровки добавлена' };
  }

  async getExerciseData(exerciseId: number, login: string) {
    const data = await this.userExerciseRepository.findBy({
      user: { login },
      exerciseId,
    });

    sortDates(data, 'date');

    return data;
  }

  async getAllExerciseInfo(login: string) {
    const user = await this.userRepository.findOneBy({ login });
    const exercises = await this.exerciseRepository.find();
    const result = [];
    exercises.forEach((exercise) => {
      const lastExerciseInfo = this.getLastUserExerciseById(
        exercise.id,
        user.exercises,
      );

      if (lastExerciseInfo) {
        const { user, ...rest } = lastExerciseInfo;
        result.push({
          user: {
            ...rest,
            moods: stringToArray(rest.moods, 'string'),
            reps: stringToArray(rest.reps, 'number'),
            weights: stringToArray(rest.weights, 'number'),
          },
          exerciseName: exercise.name,
          exerciseImage: exercise.photoUrl,
        });
      } else
        result.push({
          user: null,
          exerciseName: exercise.name,
          exerciseImage: exercise.photoUrl,
        });
    });

    return result;
  }

  getLastUserExerciseById(
    exerciseId: number,
    userExercises: UserExerciseEntity[],
  ): UserEntity['exercises'][0] | null {
    const filtered = userExercises.filter(
      (userExercise) => userExercise.exerciseId === exerciseId,
    );

    if (!filtered) {
      return null;
    }

    sortDates(filtered, 'date');

    return filtered.at(-1);
  }
}
