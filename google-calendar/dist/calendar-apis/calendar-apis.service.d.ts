import { calendar_v3 } from "googleapis";
export declare class CalendarApisService {
    private calendar;
    private readonly auth;
    constructor();
    createEvents(credential: string): Promise<object>;
    getFreeSlots(access: string): Promise<import("gaxios").GaxiosResponse<calendar_v3.Schema$Events>>;
}
