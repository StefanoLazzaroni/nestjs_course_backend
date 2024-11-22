import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
@Module({
  imports: [AuthModule, ProfilesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
