import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatEntity } from './entities/chat.entity';
import { ChatsRepository } from './chats.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ChatEntity])],
  controllers: [ChatsController],
  providers: [ChatsService, ChatsRepository],
})
export class ChatsModule {}
