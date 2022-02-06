/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, map, Observable, of } from 'rxjs';
import * as bcrypt from 'bcrypt';
import { UserDto } from './dto/UserDto';

@Injectable()
export class AuthValidateService {


    constructor(
        @Inject('User_SERVICE') private readonly userServiceClient: ClientProxy
      ) {}

    validateUser(username: string, pass: string): Observable<UserDto>|null {

        return this.userServiceClient.send('findOne',
        {username:username})
        .pipe(map((user:UserDto)=>{ 
          
          if (user && bcrypt.compareSync(pass, user.password)) {
            const { password, ...result } = user;
            return result;
          }
          return null;}),
          catchError(err => {
            console.log('caught  error and return null ', err);
            return  of(null);
        })
          )
        // let hashpass= await bcrypt.hashSync(pass,10)
      
      } 
}
