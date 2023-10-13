import { MovieScheduleService } from "./movie-schedule.service";
import { UserTimeDto } from "./dto/movie-time.dto";
export declare class MovieScheduleController {
    private readonly movieScheduleService;
    constructor(movieScheduleService: MovieScheduleService);
    getPossibleMovieTime(movieTime: UserTimeDto, authResult: string): Promise<import("../interfaces/seance-time.interface").EventTimeInterface[]>;
}
