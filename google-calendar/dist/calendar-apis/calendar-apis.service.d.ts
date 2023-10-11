export declare class CalendarApisService {
    private calendar;
    private readonly auth;
    constructor();
    createTokens(credential: string): Promise<object>;
    createEvents(credential: string): Promise<object>;
}
