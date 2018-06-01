import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() authDto: AuthDto) {
    const {error, token} = await this.authService.login(authDto);
    if (error) {
      throw error;
    }
    return token;
  }

  @Post('/signup')
  async signup(@Body() authDto: AuthDto) {
    const authRes = await this.authService.signup(authDto);
    return authRes;
  }

}
