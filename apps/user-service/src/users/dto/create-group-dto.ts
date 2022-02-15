import { IsEmail, IsNotEmpty, IsOptional } from "class-validator"
import { Policy } from "./policy"


export class CreateGroup{
     groupName:string
     roles?:Policy[]
}
export class CreateGroupDto{
     groupName:string
     roles?:string
}
