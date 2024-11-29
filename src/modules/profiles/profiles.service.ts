import { Injectable } from '@nestjs/common';
import { RegisterRequestDto } from '../auth/dto/auth.dto';
import { ProfilesRepository } from './profiles.repository';
import { DatabaseError } from '@utils/error/errors';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(private readonly profilesRepository: ProfilesRepository) {}

  findOneByEmail(email: string) {
    // Cerco su DB il profilo con questa email
    // Se lo trovo ritorno il profilo
    // Se non lo trovo ritorno Errore, non trovato
  }

  async create(
    registerRequestDto: RegisterRequestDto,
  ): Promise<Profile | DatabaseError> {
    return await this.profilesRepository.create(registerRequestDto);
  }
}
