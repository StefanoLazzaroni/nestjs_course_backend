import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { ChatEntity } from './entities/chat.entity';
import { DatabaseError } from '@utils/error/errors';
import { ChatsRepository } from './chats.repository';

@Injectable()
export class ChatsService {
  constructor(private readonly chatsRepository: ChatsRepository) {}
  async create(
    createChatDto: CreateChatDto,
  ): Promise<ChatEntity | DatabaseError> {
    return await this.chatsRepository.create(createChatDto);
  }

  findAll() {
    return `This action returns all chats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
