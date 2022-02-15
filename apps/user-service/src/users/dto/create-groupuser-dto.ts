import { IsEmail, IsNotEmpty, IsOptional } from "class-validator"


export class CreateGroupUserDto{
     userId:number
     
     privilegeGroupId:number
}