import { Injectable, HttpException } from "@nestjs/common";
import { google, calendar_v3 } from "googleapis";
import { UsersService } from "src/users/users.service";
import { CreateEventDto } from "./dto/create-event.dto";
import { EventStatus } from "../interfaces/status.interface";
import { EventTimeInterface } from "../interfaces/seance-time.interface";

@Injectable()
export class CalendarApisService {
  private calendar: calendar_v3.Calendar;

  private readonly auth = new google.auth.OAuth2({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.CLIENT_URL,
  });

  constructor(private userService: UsersService) {
    this.initGoogleCalendar();
  }

  private async initGoogleCalendar() {
    this.calendar = google.calendar({ version: "v3", auth: this.auth });
  }

  private async setCalendarCredentials(access: string, refresh: string) {
    this.auth.setCredentials({
      access_token: access,
      refresh_token: refresh,
    });

    if (!this.calendar) {
      await this.initGoogleCalendar();
    }
  }

  //
  async createEvents(
    eventDto: CreateEventDto,
    access: string
  ): Promise<EventStatus> {
    try {
      const event = {
        summary: eventDto.title,
        description: "Сходити у кіно",
        start: {
          dateTime: eventDto.startTime,
          timeZone: "Europe/Kyiv",
        },
        end: {
          dateTime: eventDto.endTime,
          timeZone: "Europe/Kyiv",
        },
      };

      const user = await this.userService.getUserByAccessToken(access);

      await this.setCalendarCredentials(access, user.refresh);

      await this.calendar.events.insert({
        calendarId: "primary",
        requestBody: event,
      });

      return { success: "Event created" };
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, error.status || 500);
    }
  }

  //
  async getEventsTime(access: string): Promise<EventTimeInterface[] | []> {
    try {
      const user = await this.userService.getUserByAccessToken(access);

      await this.setCalendarCredentials(access, user.refresh);

      const currentTime = new Date();
      const timeMin = currentTime.toISOString();

      const timeMax = new Date(
        currentTime.getTime() + 28 * 24 * 60 * 60 * 1000
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

      if (userEvents.data.items.length) {
        return userEvents.data.items.map((event) => {
          return { start: event.start.dateTime, end: event.end.dateTime };
        });
      }

      return [];
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, error.status || 500);
    }
  }
}
