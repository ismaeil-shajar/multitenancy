import { Column, Model, Table,CreatedAt,UpdatedAt, HasAssociation, BelongsToMany, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';

import { GroupUser } from './groupUser.model';
import { Users } from './users.model';

@Table({tableName:'Privilege-group'})
export class PrivilegeGroup extends Model<PrivilegeGroup> {

    @Column( {
      unique: true,
        allowNull: false
      })
    groupName: string;

    @Column(DataType.STRING)
    roles: string;//Policy[]

    @BelongsToMany(() => Users, () => GroupUser)
    users: Users[] 

}