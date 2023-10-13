import { EventTimeInterface } from "./seance-time.interface";
export interface MovieDataInterface {
    id: string;
    title: string;
    release_date: string;
    displayTime: EventTimeInterface[];
}
