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

      //-----------------------------------------------------------
      // Sort the arrays by start time.
      // slotsInCalendar.sort((a, b) => a.start - b.start);
      // movieTime.sort((a, b) => a.start - b.start);

      // // Create a hash table to store the slots in the calendar.
      // const calendarSlots = {};
      // for (const slot of slotsInCalendar) {
      //   calendarSlots[slot.start] = true;
      // }

      // // Filter the movie times to only include those that do not overlap with any calendar events.
      // const availableTime = movieTime.filter((movie) => {
      //   if (calendarSlots[movie.startTime] || calendarSlots[movie.end]) {
      //     return false;
      //   }
      //   return true;
      // });

      return availableTime;
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, error.status || 500);
    }
  }
}
