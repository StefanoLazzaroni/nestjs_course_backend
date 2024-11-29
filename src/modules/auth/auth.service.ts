import { Injectable } from '@nestjs/common';
import { RegisterRequestDto } from './dto/auth.dto';
import { ProfilesService } from '../profiles/profiles.service';
import { Profile } from '../profiles/entities/profile.entity';
import { DatabaseError } from '@utils/error/errors';

@Injectable()
export class AuthService {
  constructor(private readonly profilesService: ProfilesService) {}

  async register(
    registerRequestDto: RegisterRequestDto,
  ): Promise<Profile | DatabaseError> {
    // Verifico se esiste il profilo con questa email (FindProfile)

    // Esiste?
    // - Si
    // -- ERROR => Profilo già registrato
    // - No
    // -- Registro
    // -- Creo un Profilo
    return await this.profilesService.create(registerRequestDto);
    // -- Mando la mail
    // -- OK => Registrazione completata
  }
}
