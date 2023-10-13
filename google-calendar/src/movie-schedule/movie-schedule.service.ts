import { HttpException, Injectable } from "@nestjs/common";
import { CalendarApisService } from "src/calendar-apis/calendar-apis.service";
import { EventTimeInterface } from "src/interfaces/seance-time.interface";

@Injectable()
export class MovieScheduleService {
  constructor(private readonly calendarService: CalendarApisService) {}

  async getPossibleMovieTime(
    movieTime: EventTimeInterface[],
    accessToken: string
  ): Promise<EventTimeInterface[]> {
    try {
      const slotsInCalendar =
        await this.calendarService.getEventsTime(accessToken);

      function checkCondition(item) {
        for (const interval of slotsInCalendar) {
          if (
            (item.start >= interval.start && item.start <= interval.end) ||
            (item.end >= interval.start && item.end <= interval.end)
          ) {
            return false;
          }
        }
        return true;
      }

      const availableTime = movieTime.filter(checkCondition);

      return availableTime;
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, error.status || 500);
    }
  }
}
