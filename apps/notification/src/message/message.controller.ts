
import { Body, Controller, Get, Logger, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MessageDto } from './dto/message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messagenService: MessageService) {}

  @Get()
  async findAll(){
    return this.messagenService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() messageDto:MessageDto){
    return this.messagenService.create(messageDto);
  }
}