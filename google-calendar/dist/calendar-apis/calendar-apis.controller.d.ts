import { CalendarApisService } from "./calendar-apis.service";
import { UserCredentialsDto } from "./dto/user-credentials.dto";
export declare class CalendarApisController {
    private readonly calendarService;
    constructor(calendarService: CalendarApisService);
    createTokens(userCredentials: UserCredentialsDto): Promise<object>;
    createEvent(userCredentials: UserCredentialsDto): Promise<object>;
}
