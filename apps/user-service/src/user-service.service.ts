import { Injectable } from '@nestjs/common';
import { InjectModel,InjectConnection } from '@nestjs/sequelize';
import { Connection } from 'mysql2';
import { resourceUsage } from 'process';
import { Sequelize } from 'sequelize-typescript';
import { CreateUserDto } from './users/dto/create-user-dto';
import { Users } from './users/models/users.model';

@Injectable()
export class UserServiceService {
  constructor(@InjectConnection('development') private readonly sequelize: Sequelize,
    @InjectModel(Users, 'development')
  private readonly userModel: typeof Users){}
  async findAll() {
    let result =await this.userModel.findAll()
    //console.log(this.sequelize.close())
    return result;
  }
  
  async create( createUserDto:CreateUserDto):Promise<Users> {
    return this.userModel.create(<Users>createUserDto)
    
  }
}
