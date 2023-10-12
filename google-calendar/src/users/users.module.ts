import { Module, forwardRef } from "@nestjs/common";

import { SequelizeModule } from "@nestjs/sequelize";

import { GoogleAuthModule } from "src/google-auth/google-auth.module";
import { CalendarApisModule } from "src/calendar-apis/calendar-apis.module";
import { UsersService } from "./users.service";
import { User } from "./users.model";

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    forwardRef(() => GoogleAuthModule),
    forwardRef(() => CalendarApisModule),
  ],

  providers: [
    UsersService,
    {
      provide: "USER_REPOSITORY",
      useValue: User,
    },
  ],

  exports: [UsersService],
})
export class UsersModule {}
