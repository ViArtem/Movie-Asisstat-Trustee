import { Controller, Get, Post, Body } from "@nestjs/common";
import { CalendarApisService } from "./calendar-apis.service";
import { UserCredentialsDto } from "./dto/user-credentials.dto";

@Controller("calendar")
export class CalendarApisController {
  constructor(private readonly calendarService: CalendarApisService) {}

  @Post("create-post")
  createEvent(@Body() userCredentials: UserCredentialsDto) {
    return this.calendarService.createEvents(userCredentials.credential);
  }

  @Get("get/free-slots")
  getFreeSlot() {
    return this.calendarService;
  }
}
