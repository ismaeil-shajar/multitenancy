interface PrivilegeGroup{
    roles: string
}
export interface UserDto{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    type: string;
    organizationId: string;
    createdAt: string;
    updatedAt: string;
    privilegeGroup?: PrivilegeGroup[];
}