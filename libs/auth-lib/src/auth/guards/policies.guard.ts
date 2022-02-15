/*
https://docs.nestjs.com/guards#guards
*/

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { CHECK_POLICIES_KEY } from '../casl/CheckPolicies';
import { Policy } from '../casl/policy';

@Injectable()
export class PoliciesGuard implements CanActivate {
  constructor(
    private reflector: Reflector
  ) {}
  canActivate(context: ExecutionContext): boolean {

    const policies =this.reflector.getAllAndOverride<Policy[]>(
      CHECK_POLICIES_KEY,
      [context.getHandler(),context.getClass()]) || [];

  const {user} = context.switchToHttp().getRequest();
    
  try{
      const isAuthUser = this.checkPolicies(user['policies'].map(policy => JSON.parse(policy)), policies);
      return isAuthUser;
    }catch(err){
      return false;
    }
  }


  private checkPolicies(userPolicies: Policy[], policies: Policy[]) {
    const isAuthUser = policies.filter(resourcePolicy => {
      return userPolicies.filter(
        policy => this.isAutherize(resourcePolicy, policy)
      ).length >= 1;
    }).length;
    return isAuthUser>=1;
  }

  private isAutherize(resourcePolicy: Policy,  policy: Policy): unknown {
    return this.hasResource(resourcePolicy, policy.resources) && this.hasAction(resourcePolicy, policy);
  }

  private hasResource(resourcePolicy: Policy, resource: string) {
    return resource=='*' || resourcePolicy.resources.indexOf(resource) == 0;
  }

  private hasAction(resourcePolicy: Policy, policy: Policy): unknown {
    return resourcePolicy.action.filter(action => !policy.action.includes(action)).length == 0;
  }
}
