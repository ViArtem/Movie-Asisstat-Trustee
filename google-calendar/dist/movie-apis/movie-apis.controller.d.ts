import { MovieApisService } from "./movie-apis.service";
export declare class MovieApisController {
    private readonly movieApisService;
    constructor(movieApisService: MovieApisService);
    getMovieList(): Promise<import("../interfaces/movie-data.interface").MovieDataInterface>;
}
