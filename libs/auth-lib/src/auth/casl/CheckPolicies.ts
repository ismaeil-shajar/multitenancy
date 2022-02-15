import { SetMetadata } from "@nestjs/common";
import { Policy } from "./policy";

export const CHECK_POLICIES_KEY = 'check_policy';
export const CheckPolicies = (...policy:Policy[]) =>
  SetMetadata(CHECK_POLICIES_KEY, policy);