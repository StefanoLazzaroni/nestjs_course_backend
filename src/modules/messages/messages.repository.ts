import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageEntity } from './entities/message.entity';
import { MongoRepository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { DatabaseError } from '@utils/error/errors';

@Injectable()
export class MessagesRepository {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly dbConnection: MongoRepository<MessageEntity>,
  ) {}

  async create(
    chatId: string,
    createMessageDto: CreateMessageDto,
    senderId: string,
  ): Promise<MessageEntity | DatabaseError> {
    try {
      const messageToSave = new MessageEntity();
      messageToSave.text = createMessageDto.text;
      messageToSave.senderId = senderId;
      messageToSave.chatId = chatId;
      return await this.dbConnection.save(messageToSave);
    } catch (cause) {
      console.log(cause);
      return new DatabaseError('Impossibile salvare il messaggio', { cause });
    }
  }
}
