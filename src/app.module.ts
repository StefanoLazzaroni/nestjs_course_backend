import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      url: 'mongodb+srv://studenti:1234@nestjs-course.96eon.mongodb.net/',
      type: 'mongodb',
      database: 'stefano-lazzaroni-corso',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    ProfilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
