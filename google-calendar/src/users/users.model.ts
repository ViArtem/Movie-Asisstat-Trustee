import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttrs {
  name: string;
  email: string;
  refresh: string;
  access: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @Column({
    field: "_id",
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  refresh: string;

  @Column({ type: DataType.STRING, allowNull: false })
  access: string;
}
