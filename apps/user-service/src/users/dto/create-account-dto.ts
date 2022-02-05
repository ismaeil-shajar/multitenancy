import { IsEmail, IsNotEmpty, IsOptional } from "class-validator"


export class CreateAccountDto{
    readonly name:string
    readonly domain:string
   readonly   owner:string

}