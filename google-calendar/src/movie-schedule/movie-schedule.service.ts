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

      function checkCondition(time) {
        for (const interval of slotsInCalendar) {
          if (
            (time.start >= interval.start && time.start <= interval.end) ||
            (time.end >= interval.start && time.end <= interval.end)
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
