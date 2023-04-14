import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExerciseEntity } from '../entities/exercise.entity';
import { Repository } from 'typeorm';
import { CreateDto } from './dto/create-dto';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectRepository(ExerciseEntity)
    private exerciseRepository: Repository<ExerciseEntity>,
  ) {}

  async create(exerciseInfo: CreateDto) {
    const exercise = this.exerciseRepository.create({ ...exerciseInfo });
    await this.exerciseRepository.save(exercise);
    return { message: 'Упражнение добавлено' };
  }
}
