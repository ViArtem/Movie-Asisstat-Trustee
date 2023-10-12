import { HttpException, Injectable } from "@nestjs/common";
import fetch from "node-fetch";

@Injectable()
export class MovieApisService {
  private readonly movieApiUrl =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

  async getAvailableMoviesList() {
    try {
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
            { start: `2023-10-14T14:00:00Z`, end: `2023-10-14T15:00:00Z` },
            { start: `2023-10-14T10:00:00Z`, end: `2023-10-14T12:00:00Z` },
            { start: `2023-10-14T13:00:00Z`, end: `2023-10-14T14:00:00Z` },
            { start: `2023-10-14T18:00:00Z`, end: `2023-10-14T20:00:00Z` },
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
