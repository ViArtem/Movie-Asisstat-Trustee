import { CalendarApisService } from "src/calendar-apis/calendar-apis.service";
export declare class MovieScheduleService {
    private readonly calendarService;
    constructor(calendarService: CalendarApisService);
    getPossibleMovieTime(movieTime: Array<string>, accessToken: string): Promise<string[]>;
}
