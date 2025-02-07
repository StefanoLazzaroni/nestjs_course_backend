import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatEntity } from './entities/chat.entity';
import { MongoRepository } from 'typeorm';
import { CreateChatDto } from './dto/create-chat.dto';
import { DatabaseError } from '@utils/error/errors';

@Injectable()
export class ChatsRepository {
  constructor(
    @InjectRepository(ChatEntity)
    private readonly dbConnection: MongoRepository<ChatEntity>,
  ) {}

  async create(
    createChatDto: CreateChatDto,
  ): Promise<ChatEntity | DatabaseError> {
    try {
      const chatToSave = new ChatEntity();
      chatToSave.name = createChatDto.name;
      chatToSave.participantsId = createChatDto.participantsId;
      return await this.dbConnection.save(chatToSave);
    } catch (cause) {
      console.log(cause);
      return new DatabaseError('Impossibile salvare la chat', { cause });
    }
  }
}
