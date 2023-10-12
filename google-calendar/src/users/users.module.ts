import { Module, forwardRef } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./users.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { GoogleAuthModule } from "src/google-auth/google-auth.module";

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    forwardRef(() => GoogleAuthModule),
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
