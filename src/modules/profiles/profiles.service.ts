import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfilesService {
    findOneByEmail(email: string) {
        // Cerco su DB il profilo con questa email

        // Se lo trovo ritorno il profilo
        // Se non lo trovo ritorno Errore, non trovato
    }
}
