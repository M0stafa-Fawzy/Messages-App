import { MessagesRepository } from './messages.repository';
import { MessgaesService } from './messages.service';
import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';

@Module({
  controllers: [MessagesController],
  providers: [MessgaesService, MessagesRepository]
})
export class MessagesModule { }
