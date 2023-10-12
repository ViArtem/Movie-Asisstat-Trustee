import { Controller, Get } from "@nestjs/common";
import { MovieApisService } from "./movie-apis.service";

@Controller("movie-apis")
export class MovieApisController {
  constructor(private readonly movieApisService: MovieApisService) {}
  @Get("get/list")
  getMovieList() {
    return this.movieApisService.getAvailableMoviesList();
  }
}
