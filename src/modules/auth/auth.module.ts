import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ProfilesModule } from '../profiles/profiles.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'laMiaIncredibilePasswordSegreta',
      signOptions: {
        algorithm: 'HS256',
        expiresIn: 300,
      },
    }),
    ProfilesModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
