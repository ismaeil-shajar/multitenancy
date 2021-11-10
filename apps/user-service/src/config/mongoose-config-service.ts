import { Inject, Injectable, Scope } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";

@Injectable({scope:Scope.REQUEST})
export class MongooseConfigService implements MongooseOptionsFactory {
    constructor(@Inject(REQUEST) private readonly request,){}

  createMongooseOptions(): MongooseModuleOptions {
    let domain:string[]
    let database='database_development'
    if(this.request.data ){
      domain=this.request.data['host'].split('.')
      console.log(this.request)
    }
    else{
      domain=this.request['headers']['host'].split('.')
    }

    console.log(domain)
    if(domain[0]!='127' && domain[0]!='www' && domain.length >2){
      database='tenant_'+domain[0]
      console.log('current DB',database)
    }
    return {
      uri: 'mongodb://localhost:27017/'+database,
    };
  }
}