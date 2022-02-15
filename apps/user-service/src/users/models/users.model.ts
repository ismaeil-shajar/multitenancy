import { Column, Model, Table,CreatedAt,UpdatedAt, BelongsToMany,ForeignKey } from 'sequelize-typescript';
import { GroupUser } from './groupUser.model';
import { Organizations } from './organizations.model';
import { PrivilegeGroup } from './privilegeGroup.model';

@Table({tableName:'Users'})
export class Users extends Model<Users> {
    @Column( {allowNull: false })
    firstName: string;

    @Column( {allowNull: false })
    lastName: string;

    @Column( { allowNull: false,unique: true })
    email: string;

    @Column( {allowNull: false})
    password: string;    
      
    @Column( { allowNull: false})
    type: string;

    @ForeignKey(() => Organizations)
    @Column
    organizationId: number;

    @BelongsToMany(() => PrivilegeGroup, () => GroupUser)
    privilegeGroup: PrivilegeGroup[]
}