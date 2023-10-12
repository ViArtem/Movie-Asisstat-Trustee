import { Module, forwardRef } from "@nestjs/common";
import { MovieScheduleController } from "./movie-schedule.controller";
import { MovieScheduleService } from "./movie-schedule.service";
import { CalendarApisModule } from "src/calendar-apis/calendar-apis.module";

@Module({
  controllers: [MovieScheduleController],
  providers: [MovieScheduleService],
  imports: [forwardRef(() => CalendarApisModule)],
})
export class MovieScheduleModule {}
