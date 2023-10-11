import { Module } from "@nestjs/common";
import { CalendarApisController } from "./calendar-apis.controller";
import { CalendarApisService } from "./calendar-apis.service";

@Module({
  controllers: [CalendarApisController],
  providers: [CalendarApisService],
})
export class CalendarApisModule {}
