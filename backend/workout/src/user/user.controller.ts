import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Get,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthDto } from './dto/auth-dto';
import { AuthGuard } from '../guards/authGuard';

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
  @Get('test')
  getUser() {
    return '99';
  }
}
