import { Injectable } from '@nestjs/common';
import { RegisterRequestDto } from '../auth/dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEntity } from './entities/profile.entity';
import { MongoRepository } from 'typeorm';
import { DatabaseError } from '@utils/error/errors';

@Injectable()
export class ProfilesRepository {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly dbConnection: MongoRepository<ProfileEntity>,
  ) {}

  async create(
    registerRequestDto: RegisterRequestDto,
  ): Promise<ProfileEntity | DatabaseError> {
    try {
      const profileToSave = new ProfileEntity();
      profileToSave.email = registerRequestDto.email;
      profileToSave.password = registerRequestDto.password;
      profileToSave.username = registerRequestDto.username;
      return await this.dbConnection.save(profileToSave);
    } catch (cause) {
      console.log(cause);
      return new DatabaseError('Impossibile salvare il profilo', { cause });
    }
  }

  async findByEmail(email: string) {
    try {
      return await this.dbConnection.findOne({ where: { email: email } });
    } catch (cause) {
      return new DatabaseError('Impossibile trovare il profilo', { cause });
    }
  }

  async findAll() {
    try {
      return await this.dbConnection.find();
    } catch (cause) {
      return new DatabaseError('Impossibile trovare il profilo', { cause });
    }
  }
}
