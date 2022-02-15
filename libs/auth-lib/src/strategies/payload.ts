import { Policy } from "../auth/casl/policy";

export class Payload{
    username: string;
    orgId:number;
    sub:number;
    policies:string[];
    roles:string[];
   }