import { Injectable } from '@nestjs/common';
import { InjectModel,InjectConnection } from '@nestjs/sequelize';
import { Connection } from 'mysql2';
import { resourceUsage } from 'process';
import { Sequelize } from 'sequelize-typescript';
import { CreateUserDto } from './users/dto/create-user-dto';
import { Users } from './users/models/users.model';

@Injectable()
export class UserServiceService {
  constructor(){}
}
