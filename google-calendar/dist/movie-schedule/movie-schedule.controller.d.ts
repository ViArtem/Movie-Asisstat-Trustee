import { MovieScheduleService } from "./movie-schedule.service";
export declare class MovieScheduleController {
    private readonly movieScheduleService;
    constructor(movieScheduleService: MovieScheduleService);
    getPossibleMovieTime(movieTime: any, authResult: string): Promise<import("../interfaces/seance-time.interface").EventTimeInterface[]>;
}
