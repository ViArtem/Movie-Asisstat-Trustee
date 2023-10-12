import { UsersService } from "src/users/users.service";
import { CreateEventDto } from "./dto/create-event.dto";
export declare class CalendarApisService {
    private userService;
    private calendar;
    private readonly auth;
    constructor(userService: UsersService);
    createEvents(eventDto: CreateEventDto, authResult: any): Promise<object>;
    getEventsTime(access: string): Promise<{
        start: string;
        end: string;
    }[]>;
}
