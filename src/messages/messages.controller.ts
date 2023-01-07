import { MessgaesService } from './messages.service';
import { Controller, Get, Post, Param, Body, NotFoundException } from '@nestjs/common';
import { CreateMessage } from './dtos/create-message.dto'

@Controller('messages')
export class MessagesController {
    constructor(public messagesService: MessgaesService) { }

    @Get()
    listMessages() {
        return this.messagesService.findAll()
    }

    @Post()
    createMessage(@Body() body: CreateMessage) {
        return this.messagesService.create(body.content)
    }

    @Get('/:id')
    async getSigleMessage(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id)
        if (!message) throw new NotFoundException("message not found")
        return message
    }
}
