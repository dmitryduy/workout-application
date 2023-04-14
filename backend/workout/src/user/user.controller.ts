import {
  Controller,
  Post,
  UseGuards,
  Body,
  Get,
  Req,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthDto } from './dto/auth-dto';
import { AuthGuard } from '../guards/authGuard';
import { AddExerciseInfoDto } from './dto/addExerciseInfo-dto';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Post('auth/register')
  register(@Body() authDto: AuthDto) {
    return this.userService.register(authDto);
  }
  @Post('auth/login')
  login(@Body() authDto: AuthDto) {
    return this.userService.login(authDto);
  }

  @UseGuards(AuthGuard)
  @Post('add-exercise-info')
  addExerciseInfo(@Body() exerciseData: AddExerciseInfoDto, @Req() request) {
    return this.userService.addExerciseInfo(exerciseData, request.user.login);
  }

  @UseGuards(AuthGuard)
  @Get('get-exercise-data')
  getExerciseData(@Param('id') exerciseId, @Req() request) {
    return this.userService.getExerciseData(+exerciseId, request.user.login);
  }

  @UseGuards(AuthGuard)
  @Get('exercises')
  getAllExerciseInfo(@Req() request) {
    return this.userService.getAllExerciseInfo(request.user.login);
  }
}
