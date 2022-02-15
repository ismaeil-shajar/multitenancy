interface PrivilegeGroup{
    roles: string
}
export interface UserDto{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    type: string;
    organizationId: number;
    createdAt: string;
    updatedAt: string;
    privilegeGroup?: PrivilegeGroup[];
}