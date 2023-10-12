import { UsersService } from "src/users/users.service";
export interface LoginInterface {
    access?: string;
    message?: string;
}
export declare class GoogleAuthService {
    private userService;
    constructor(userService: UsersService);
    googleLogin(userData: any): Promise<LoginInterface>;
}
