import { Module, forwardRef } from "@nestjs/common";
import { GoogleAuthService } from "./google-auth.service";
import { GoogleAuthController } from "./google-auth.controller";
import { GoogleStrategy } from "./google.strategy";

import { UsersModule } from "src/users/users.module";

@Module({
  providers: [GoogleAuthService, GoogleStrategy],
  controllers: [GoogleAuthController],
  imports: [forwardRef(() => UsersModule)],
  exports: [GoogleAuthService],
})
export class GoogleAuthModule {}
