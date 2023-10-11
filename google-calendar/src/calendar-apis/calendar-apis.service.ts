import { Injectable } from "@nestjs/common";
import { google, calendar_v3 } from "googleapis";
import axios from "axios";

@Injectable()
export class CalendarApisService {
  private calendar: calendar_v3.Calendar;
  private readonly auth = new google.auth.OAuth2({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.CLIENT_URL,
  });
  constructor() {}

  async createEvents(credential: string): Promise<object> {
    try {
      this.auth.setCredentials({
        access_token: "",
        refresh_token: "",
      });

      this.calendar = google.calendar({ version: "v3", auth: this.auth });
      const event = {
        summary: "Demo",
        description: "Тест для демонстрацїї",
        start: {
          dateTime: "2023-10-20T16:00:00+02:00",
          timeZone: "Europe/Kyiv",
        },
        end: {
          dateTime: "2023-10-20T18:00:00+02:00",
          timeZone: "Europe/Kyiv",
        },
      };

      const response = await this.calendar.events.insert({
        calendarId: "primary",
        requestBody: event,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
