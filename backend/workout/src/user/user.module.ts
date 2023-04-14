import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserExerciseEntity } from '../entities/userExercise.entity';
import { ExerciseEntity } from '../entities/exercise.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, UserExerciseEntity, ExerciseEntity]),
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '31d' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
