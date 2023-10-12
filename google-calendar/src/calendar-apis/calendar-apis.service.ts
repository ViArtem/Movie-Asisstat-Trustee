import { Injectable, HttpException } from "@nestjs/common";
import { google, calendar_v3 } from "googleapis";
import { UsersService } from "src/users/users.service";
import { CreateEventDto } from "./dto/create-event.dto";

@Injectable()
export class CalendarApisService {
  private calendar: calendar_v3.Calendar;

  private readonly auth = new google.auth.OAuth2({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.CLIENT_URL,
  });

  constructor(private userService: UsersService) {}

  //
  async createEvents(eventDto: CreateEventDto, authResult): Promise<object> {
    try {
      const event = {
        summary: eventDto.title,
        description: "Сходити у кіно",
        start: {
          dateTime: eventDto.startTime,
          //timeZone: "Europe/Kyiv",
        },
        end: {
          dateTime: eventDto.endTime,
          //timeZone: "Europe/Kyiv",
        },
      };

      const user = await this.userService.getUserByAccessToken(
        authResult.access
      );

      this.auth.setCredentials({
        access_token: authResult.access,
        refresh_token: user.refresh,
      });

      this.calendar = google.calendar({ version: "v3", auth: this.auth });

      const response = await this.calendar.events.insert({
        calendarId: "primary",
        requestBody: event,
      });
      return response;
      return;
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, error.status || 500);
    }
  }

  //
  async getEventsTime(access: string) {
    try {
      const user = await this.userService.getUserByAccessToken(access);

      this.auth.setCredentials({
        access_token: access,
        refresh_token: user.refresh,
      });

      this.calendar = google.calendar({ version: "v3", auth: this.auth });

      const currentTime = new Date();
      const timeMin = currentTime.toISOString();

      const timeMax = new Date(
        currentTime.getTime() + 7 * 24 * 60 * 60 * 1000
      ).toISOString();

      const userEvents = await this.calendar.events.list({
        calendarId: "primary",
        timeMin: timeMin,
        timeMax: timeMax,
        maxResults: 10,
        singleEvents: true,
        orderBy: "startTime",
        timeZone: "Etc/UTC",
      });

      const eventTime = userEvents.data.items.map((event) => {
        return { start: event.start.dateTime, end: event.end.dateTime };
      });

      return eventTime;
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, error.status || 500);
    }
  }
}
