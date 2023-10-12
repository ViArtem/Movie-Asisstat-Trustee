import { HttpException, Injectable } from "@nestjs/common";
import { CalendarApisService } from "src/calendar-apis/calendar-apis.service";

@Injectable()
export class MovieScheduleService {
  constructor(private readonly calendarService: CalendarApisService) {}

  async getPossibleMovieTime(movieTime: Array<string>, accessToken: string) {
    try {
      const slotsInCalendar =
        await this.calendarService.getEventsTime(accessToken);

      function checkCondition(item) {
        for (const interval of slotsInCalendar) {
          if (item >= interval.start && item <= interval.end) {
            return false;
          }
        }
        return true;
      }

      const result = movieTime.filter(checkCondition);
      console.log(result);
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, error.status || 500);
    }
  }
}
