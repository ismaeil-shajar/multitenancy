import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../role/role.enum';

import { ROLES_KEY } from '../role/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>(ROLES_KEY, context.getHandler());
    if (!roles) {
         return true;
    }
    const {user} = context.switchToHttp().getRequest();
    return this.matchRoles(roles,user['roles'])
  }
  matchRoles(roles:string[],userRoles:Role[]){
      return roles.filter(role=>!userRoles.includes).length==0;
  }
}