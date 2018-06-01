import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import * as jwt from 'jsonwebtoken';
import { UserService } from '../user/user.service';
import * as bcrpyt from 'bcrypt';
import { User } from '../user/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login(authDto: AuthDto) {
    const user = await this.userService.findOne(authDto);
    if (!user) {
      return { error: new HttpException('User not found', HttpStatus.BAD_REQUEST), token: null };
    }
    const match = await bcrpyt.compare(authDto.password, user.password);
    if (match) {
      const token = {
        token: jwt.sign(
          {
            username: authDto.username,
            exp: Math.round(new Date().getTime() / 1000) + 604800,
          },
          'secret',
        ),
      };
      return { error: null, token };
    }
    return { error: new HttpException('Invalid password', HttpStatus.BAD_REQUEST), token: null };
  }

  async signup(authDto: AuthDto) {
    const hash = await bcrpyt.hash(authDto.password, 1);
    const res = await this.userService.create({
      username: authDto.username,
      password: hash,
    });
    return { message: 'success' };
  }
}
