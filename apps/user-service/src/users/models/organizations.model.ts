import { Column, Model, Table,CreatedAt,UpdatedAt, DataType, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Users } from './users.model';

@Table({tableName:'Organizations'})
export class Organizations extends Model<Organizations> {

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  domain: string

  @HasMany(()=>Users,'organizationId')
  users: Users[]
  
}