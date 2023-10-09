import { Controller, Get, Post, Body } from "@nestjs/common";
import { CalendarApisService } from "./calendar-apis.service";
import { UserCredentialsDto } from "./dto/user-credentials.dto";

@Controller("calendar")
export class CalendarApisController {
  constructor(private readonly calendarService: CalendarApisService) {}

  @Post("create-tokens")
  createTokens(@Body() userCredentials: UserCredentialsDto) {
    console.log(userCredentials);

    return this.calendarService.createTokens(userCredentials.credentials);
  }
}
