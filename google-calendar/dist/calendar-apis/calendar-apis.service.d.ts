import { UsersService } from "src/users/users.service";
import { CreateEventDto } from "./dto/create-event.dto";
import { EventStatus } from "../interfaces/status.interface";
import { EventTimeInterface } from "../interfaces/seance-time.interface";
export declare class CalendarApisService {
    private userService;
    private calendar;
    private readonly auth;
    constructor(userService: UsersService);
    private initGoogleCalendar;
    private setCalendarCredentials;
    createEvents(eventDto: CreateEventDto, access: string): Promise<EventStatus>;
    getEventsTime(access: string): Promise<EventTimeInterface[] | []>;
}
