import { UsersService } from "src/users/users.service";
export declare class CalendarApisService {
    private userService;
    private calendar;
    private readonly auth;
    constructor(userService: UsersService);
    createEvents(credential: string): Promise<object>;
    getEventsTime(access: string): Promise<{
        start: string;
        end: string;
    }[]>;
}
