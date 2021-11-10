import { IsEmail, IsNotEmpty, IsOptional } from "class-validator"

export class CreateUserDto{
    @IsNotEmpty()
    readonly firstName:string
    @IsOptional()
    readonly lastName:string
    @IsEmail()
   readonly   email:string
   readonly password:string
   readonly type:string
}