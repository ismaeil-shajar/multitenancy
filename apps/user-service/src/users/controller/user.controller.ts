import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from '../dto/create-user-dto';
import { UsersService } from '../services/users.service';

@Controller()
export class UsersController {
    constructor(
        private readonly usersService:UsersService
        ) {}
    @Get('user/:id')
  async getUserById(@Param('id')id:any){
    return this.usersService.findUserById(id);
  }
  
  @Get('user/name/:name')
  async eventGetUserById(@Param('name') username:any):Promise<any>{
    console.log("Logger we arrive",username)
    return this.usersService.findOne(username);
  }
  
  @MessagePattern('findOne')
  async getUserByName(data:any){
    console.log("Logger we arrive",data.username)
    return this.usersService.findOne(data.username);
  }
  @Get('user')
  async getUsers(@Query() query:any){
    return this.usersService.findUserAll(query);
  }
  
  
  @Put('user/:id')
  async updateUser(@Param('id') id:any,@Body() dto:any){
    return this.usersService.update(id,dto);
  }

  @Post('user')
  async createUser(@Body() userDto:CreateUserDto) {

    return  this.usersService.create(userDto)

   }

}
