import { Injectable } from '@nestjs/common';
import { RegisterRequestDto } from './dto/auth.dto';
import { ProfilesService } from '../profiles/profiles.service';

@Injectable()
export class AuthService {
  constructor(private readonly profilesService: ProfilesService) {}

  register(registerRequestDto: RegisterRequestDto) {
    // Verifico se esiste il profilo con questa email (FindProfile)

    // Esiste?
    // - Si
    // -- ERROR => Profilo già registrato
    // - No
    // -- Registro
    // -- Creo un Profilo
    // -- Mando la mail
    // -- OK => Registrazione completata
    return 'Ti sei registrato';
  }
}
