import { HttpException, Injectable } from "@nestjs/common";

@Injectable()
export class MovieApisService {
  async getMoviesList() {
    try {
      const url = "https://api.themoviedb.org/3/authentication";
      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };

      fetch(url, options)
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((err) => console.error("error:" + err));
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, error.status);
    }
  }
}
