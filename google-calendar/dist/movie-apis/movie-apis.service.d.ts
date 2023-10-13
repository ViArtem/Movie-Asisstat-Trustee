import { MovieDataInterface } from "src/interfaces/movie-data.interface";
export declare class MovieApisService {
    private readonly movieApiUrl;
    private randomArrayNumber;
    getAvailableMoviesList(): Promise<MovieDataInterface>;
}
