/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { CreateAccountDto } from '../dto/create-account-dto';
import { CreateUserDto } from '../dto/create-user-dto';
import { Organizations } from '../models/organizations.model';
import { Users } from '../models/users.model';
import * as bcrypt from 'bcrypt';
import { PrivilegeGroup } from '../models/privilegeGroup.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users)    private readonly userModel: typeof Users,
        @InjectModel(Organizations) private readonly organizationsModel:typeof Organizations) {
    }

    async findOne(username: string): Promise<Users> {
    
      return this.userModel.findOne({include:[{model:PrivilegeGroup , attributes:["roles"],through: {attributes: []}}],where:{email:username},nest: true}) ;
    }     
    
    async create( createUserDto:CreateUserDto):Promise<Users> {
      const hashpassword= await bcrypt.hash(createUserDto.password,10)
      createUserDto.password=hashpassword;
      return this.userModel.create(<Users>createUserDto)
    }

      async findId(id): Promise<Users> {
        return this.userModel.findOne({where:{id:id},raw: true,nest: true}) ;
      }
    
      async createOrg(createAccountDto: CreateAccountDto){
        let {owner,...orgDto} = createAccountDto
        return this.organizationsModel.create(<Organizations>orgDto);
      }
      async getOrg(name: string){
        return this.organizationsModel.findOne({where:{name:name}})
      }  
      async getOrgById(id: any){
        return this.organizationsModel.findByPk(id)
      }
      async findUserById(id: any): Promise<Users> {
        return this.userModel.findOne({
          attributes: {exclude: ['password']},
          where: { id: id },
          nest: true,
        });
      }
      async findUserAll(query:any): Promise<Users[]> {
        if(query.type && query.type=='admin'){
          query.type={[Op.in]:['tenant','admin']}
        }
        console.log('users where',query)
        return this.userModel.findAll({ attributes: {exclude: ['password']}, where:query, nest: true });
      }
      
      async update( id:any,userDto:any) {
        return this.userModel.update(userDto,{where:{id:id}})
      }


}
