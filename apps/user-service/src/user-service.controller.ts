import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserServiceService } from './user-service.service';
import { CreateUserDto } from './users/dto/create-user-dto';

@Controller()
export class UserServiceController {
  constructor(private readonly userServiceService: UserServiceService) {}

}
