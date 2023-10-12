"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieApisService = void 0;
const common_1 = require("@nestjs/common");
const node_fetch_1 = require("node-fetch");
let MovieApisService = class MovieApisService {
    constructor() {
        this.movieApiUrl = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    }
    async getAvailableMoviesList() {
        try {
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${process.env.MOVIE_API_BEARER}`,
                },
            };
            const movieData = await (0, node_fetch_1.default)(this.movieApiUrl, options);
            if (!movieData.ok) {
                throw new common_1.HttpException("Failed to fetch movies", movieData.status);
            }
            const movieDataJson = await movieData.json();
            const movieList = movieDataJson.results.map((movieData) => {
                return {
                    id: movieData.id,
                    title: movieData.original_title,
                    release_date: movieData.release_date,
                    displayTime: [
                        { start: `2023-10-14T14:00:00Z`, end: `2023-10-14T15:00:00Z` },
                        { start: `2023-10-14T10:00:00Z`, end: `2023-10-14T12:00:00Z` },
                        { start: `2023-10-14T13:00:00Z`, end: `2023-10-14T14:00:00Z` },
                        { start: `2023-10-14T18:00:00Z`, end: `2023-10-14T20:00:00Z` },
                    ],
                };
            });
            return movieList;
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException(error.message, error.status || 500);
        }
    }
};
exports.MovieApisService = MovieApisService;
exports.MovieApisService = MovieApisService = __decorate([
    (0, common_1.Injectable)()
], MovieApisService);
//# sourceMappingURL=movie-apis.service.js.map