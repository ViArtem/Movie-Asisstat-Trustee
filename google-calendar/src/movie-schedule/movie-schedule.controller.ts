import { Body, Controller, Post, Query } from "@nestjs/common";
import { MovieScheduleService } from "./movie-schedule.service";

@Controller("movie-schedule")
export class MovieScheduleController {
  constructor(private readonly movieScheduleService: MovieScheduleService) {}
  @Post("/get/possible-movie-time")
  getPossibleMovieTime(
    @Body() movieTime,
    @Query("authResult") authResult: string
  ) {
    return this.movieScheduleService.getPossibleMovieTime(
      movieTime.displayTime,
      JSON.parse(authResult).access
    );
  }
}
