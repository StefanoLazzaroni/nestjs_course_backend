import { Body, Controller, Post } from '@nestjs/common';
import { RegisterRequestDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() body: RegisterRequestDto) {
    return this.authService.register(body);
  }
}
