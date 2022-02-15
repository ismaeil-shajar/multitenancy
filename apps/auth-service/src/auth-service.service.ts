import { Injectable } from '@nestjs/common';
import { AccessToken } from './dto/accessToken';
import { UserDto } from './dto/UserDto';
import { JwtService } from '@nestjs/jwt';
import { Payload } from '@app/auth-lib';

@Injectable()
export class AuthServiceService {
  constructor(
    private readonly jwtService: JwtService,
  ) {}
  login(user:UserDto):AccessToken {
    let policies=this.refactorPolicies(user);
    const payload:Payload = { username: user.firstName,orgId:user.organizationId,sub: user.id,roles:['admin'],policies};
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
  private refactorPolicies(user: UserDto): string[] {
    const policiesArray:string[] = user.privilegeGroup.map(p => JSON.parse(p.roles)).reduce((result, next) => result.concat(next), []).map((p):string => JSON.stringify(p));
 return [...new Set(policiesArray)]
  }


}
