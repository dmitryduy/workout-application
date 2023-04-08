import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthDto } from './dto/auth-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Errors } from '../common/constants';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private config: ConfigService,
    private jwtService: JwtService,
  ) {}

  async cryptPassword(password: string) {
    return await bcrypt.hash(password, this.config.get('passwordSalt'));
  }

  async signUserByJwt(user) {
    return {
      login: user.login,
      token: await this.jwtService.signAsync(
        { login: user.login },
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
}
