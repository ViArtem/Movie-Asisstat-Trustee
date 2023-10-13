import { HttpException, Injectable } from "@nestjs/common";
import fetch from "node-fetch";
import { MovieDataInterface } from "src/interfaces/movie-data.interface";

@Injectable()
export class MovieApisService {
  private readonly movieApiUrl =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

  private randomArrayNumber(array: Array<any>) {
    return Math.floor(Math.random() * array.length) + 0;
  }

  async getAvailableMoviesList(): Promise<MovieDataInterface> {
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

      const movieData = await fetch(this.movieApiUrl, options);

      if (!movieData.ok) {
        throw new HttpException("Failed to fetch movies", movieData.status);
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
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, error.status || 500);
    }
  }
}
