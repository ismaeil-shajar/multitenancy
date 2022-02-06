import { Inject, Injectable, Scope } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { RequestContext } from "@nestjs/microservices";
import { SequelizeModuleOptions, SequelizeOptionsFactory} from "@nestjs/sequelize";

@Injectable({scope:Scope.REQUEST})
export class SequelizeConfigService implements SequelizeOptionsFactory {
    constructor(@Inject(REQUEST) private readonly request:RequestContext){}
    
    createSequelizeOptions(): SequelizeModuleOptions {

      let domain:string[]
      let database='database_development'
      
      if(this.request.data ){
        const host=this.request.data['host']
        domain=host?this.request.data['host'].split('.'):"127.0.0.1".split('.');
        console.log(this.request)
      }
      else{
        domain=this.request['headers']['host'].split('.')
      }

      console.log(domain)
      if(domain[0]!='127' && domain[0]!='www' && domain.length >2){
        database=domain[0]
        console.log('current DB',database)
      }

    return {
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'ismaeil',
      password: 'root',
      database: database,
      autoLoadModels: true,
      synchronize: true,
    };
  }
}