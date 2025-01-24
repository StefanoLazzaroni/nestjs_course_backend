import { Body, Controller, Post } from '@nestjs/common';
import { LoginRequestDto, RegisterRequestDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { isApplicationError } from '@utils/error/errors';
import { mapProfileEntityToProfileDto } from '../profiles/profiles.mapper';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() body: RegisterRequestDto) {
    const result = await this.authService.register(body);

    if (isApplicationError(result)) {
      throw result;
    }

    return mapProfileEntityToProfileDto(result);
    // return {
    //   success: true,
    // };
  }

  @Post('/login')
  async login(@Body() body: LoginRequestDto) {
    return this.authService.login(body);
  }
}
