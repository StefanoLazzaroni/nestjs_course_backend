import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { GetProfileId } from '../auth/profile.decorator';
import { MessagesService } from './messages.service';

@Controller('chats/:chatId/messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  create(
    @Param('chatId') chatId: string,
    @Body() createMessageDto: CreateMessageDto,
    @GetProfileId() profileId: string,
  ) {
    return this.messagesService.create(chatId, createMessageDto, profileId);
  }
}
