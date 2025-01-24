import { IsEmail, IsString } from 'class-validator';

export class RegisterRequestDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  @IsEmail()
  email: string;
}

export class LoginRequestDto {
  @IsString()
  password: string;

  @IsString()
  @IsEmail()
  email: string;
}
