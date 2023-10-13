import { Controller, Post, Body, Query } from "@nestjs/common";
import { CalendarApisService } from "./calendar-apis.service";
import { CreateEventDto } from "./dto/create-event.dto";

@Controller("calendar")
export class CalendarApisController {
  constructor(private readonly calendarService: CalendarApisService) {}

  @Post("create-event")
  createEvent(
    @Body() userCredentials: CreateEventDto,
    @Query("authResult") authResult: string
  ) {
    return this.calendarService.createEvents(
      userCredentials,
      JSON.parse(authResult).access
    );
  }
}
