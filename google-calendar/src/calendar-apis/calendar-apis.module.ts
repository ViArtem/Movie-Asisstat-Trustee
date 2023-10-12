import { Module, forwardRef } from "@nestjs/common";
import { CalendarApisController } from "./calendar-apis.controller";
import { CalendarApisService } from "./calendar-apis.service";
import { UsersModule } from "src/users/users.module";

@Module({
  controllers: [CalendarApisController],
  providers: [CalendarApisService],
  imports: [forwardRef(() => UsersModule)],
  exports: [CalendarApisService],
})
export class CalendarApisModule {}
