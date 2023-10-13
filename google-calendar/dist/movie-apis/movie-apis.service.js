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
    randomArrayNumber(array) {
        return Math.floor(Math.random() * array.length) + 0;
    }
    async getAvailableMoviesList() {
        try {
            const randonTimes = [
                { start: `2023-10-18T14:00:00Z`, end: `2023-10-18T15:00:00Z` },
                { start: `2023-10-17T10:00:00Z`, end: `2023-10-17T12:00:00Z` },
                { start: `2023-10-20T13:00:00Z`, end: `2023-10-20T13:30:00Z` },
                { start: `2023-10-17T18:00:00Z`, end: `2023-10-17T20:00:00Z` },
                { start: `2023-10-18T14:00:00Z`, end: `2023-10-18T15:00:00Z` },
                { start: `2023-10-22T08:00:00Z`, end: `2023-10-22T10:00:00Z` },
                { start: `2023-10-24T09:30:00Z`, end: `2023-10-24T12:30:00Z` },
                { start: `2023-10-19T10:15:00Z`, end: `2023-10-19T12:00:00Z` },
                { start: `2023-10-19T19:20:00Z`, end: `2023-10-19T21:10:00Z` },
                { start: `2023-10-22T17:00:00Z`, end: `2023-10-22T19:00:00Z` },
                { start: `2023-10-23T18:00:00Z`, end: `2023-10-23T21:00:00Z` },
                { start: `2023-10-20T14:00:00Z`, end: `2023-10-20T15:00:00Z` },
            ];
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
                        randonTimes[this.randomArrayNumber(randonTimes)],
                        randonTimes[this.randomArrayNumber(randonTimes)],
                        randonTimes[this.randomArrayNumber(randonTimes)],
                        randonTimes[this.randomArrayNumber(randonTimes)],
                        randonTimes[this.randomArrayNumber(randonTimes)],
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