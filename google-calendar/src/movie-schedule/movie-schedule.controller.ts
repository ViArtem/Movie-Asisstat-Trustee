import { Body, Controller, Post, Query, UsePipes } from "@nestjs/common";
import { MovieScheduleService } from "./movie-schedule.service";
import { UserTimeDto } from "./dto/movie-time.dto";

@Controller("movie-schedule")
export class MovieScheduleController {
  constructor(private readonly movieScheduleService: MovieScheduleService) {}

  @Post("/get/possible-movie-time")
  getPossibleMovieTime(
    @Body() movieTime: UserTimeDto,
    @Query("authResult") authResult: string
  ) {
    return this.movieScheduleService.getPossibleMovieTime(
      movieTime.displayTime,
      JSON.parse(authResult).access
    );
  }
}
