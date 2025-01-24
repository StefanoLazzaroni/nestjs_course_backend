import { Injectable } from '@nestjs/common';
import { RegisterRequestDto } from '../auth/dto/auth.dto';
import { ProfilesRepository } from './profiles.repository';
import { DatabaseError } from '@utils/error/errors';
import { ProfileEntity } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(private readonly profilesRepository: ProfilesRepository) {}

  async findOneByEmail(email: string) {
    const profile = await this.profilesRepository.findByEmail(email);

    return profile;
  }

  async create(
    registerRequestDto: RegisterRequestDto,
  ): Promise<ProfileEntity | DatabaseError> {
    return await this.profilesRepository.create(registerRequestDto);
  }
}
