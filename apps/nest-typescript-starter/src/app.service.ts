import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor( @Inject('NOTIFY_SERVICE') private readonly client: ClientProxy){}
 async getHello(): Promise<string> {
    let recieve= await this.client.send<number>("notify",{user:"Ali",data:{a:1,b:2}}).toPromise();
  
    return "\t add 1+2="+recieve;
  }
}
