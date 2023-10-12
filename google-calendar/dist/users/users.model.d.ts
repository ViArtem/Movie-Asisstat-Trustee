import { Model } from "sequelize-typescript";
interface UserCreationAttrs {
    name: string;
    email: string;
    refresh: string;
    access: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: string;
    name: string;
    email: string;
    refresh: string;
    access: string;
}
export {};
