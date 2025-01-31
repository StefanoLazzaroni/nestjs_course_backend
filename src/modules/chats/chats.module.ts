import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatEntity } from './entities/chat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatEntity])],
  controllers: [ChatsController],
  providers: [ChatsService],
})
export class ChatsModule {}
