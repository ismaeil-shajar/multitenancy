import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './users/dto/create-user-dto';
import { Users } from './users/models/users.model';

@Injectable()
export class UserServiceService {
  constructor(
    @InjectModel(Users)
  private readonly userModel: typeof Users){}
  async findAll(): Promise<Users[]> {
    return this.userModel.findAll() ;
  }
  
  async create( createUserDto:CreateUserDto):Promise<Users> {
    return this.userModel.create(<Users>createUserDto)
  }
}
