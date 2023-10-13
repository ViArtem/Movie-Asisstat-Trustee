import { CalendarApisService } from "./calendar-apis.service";
import { CreateEventDto } from "./dto/create-event.dto";
export declare class CalendarApisController {
    private readonly calendarService;
    constructor(calendarService: CalendarApisService);
    createEvent(userCredentials: CreateEventDto, authResult: string): Promise<import("../interfaces/status.interface").EventStatus>;
}
