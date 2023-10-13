import { UsersService } from "src/users/users.service";
import { EventStatus } from "src/interfaces/status.interface";
export declare class GoogleAuthService {
    private userService;
    constructor(userService: UsersService);
    googleLogin(userData: any): Promise<EventStatus>;
}
