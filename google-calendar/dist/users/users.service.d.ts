import { User } from "src/users/users.model";
import { UserInterface } from "src/interfaces/0Auth-user.interface";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: typeof User);
    getUserByEmail(email: string): Promise<User>;
    getUserByAccessToken(token: string): Promise<User>;
    createNewUser(userData: UserInterface): Promise<User>;
    updateUserTokens(userData: UserInterface): Promise<[affectedCount: number]>;
}
