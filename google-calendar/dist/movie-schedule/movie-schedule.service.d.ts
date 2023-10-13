import { CalendarApisService } from "src/calendar-apis/calendar-apis.service";
import { EventTimeInterface } from "src/interfaces/seance-time.interface";
export declare class MovieScheduleService {
    private readonly calendarService;
    constructor(calendarService: CalendarApisService);
    getPossibleMovieTime(movieTime: EventTimeInterface[], accessToken: string): Promise<EventTimeInterface[]>;
}
