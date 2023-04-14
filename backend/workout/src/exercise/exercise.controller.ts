import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { CreateDto } from './dto/create-dto';
import { AuthGuard } from '../guards/authGuard';
import { AdminGuard } from '../guards/adminGuard';

@Controller()
export class ExerciseController {
  constructor(private exerciseService: ExerciseService) {}

  @UseGuards(AuthGuard, AdminGuard)
  @Post('create-exercise')
  create(@Body() createDto: CreateDto) {
    return this.exerciseService.create(createDto);
  }
}
