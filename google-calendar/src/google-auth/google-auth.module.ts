import { Module } from "@nestjs/common";
import { GoogleAuthService } from "./google-auth.service";
import { GoogleAuthController } from "./google-auth.controller";
import { GoogleStrategy } from "./google.strategy";

@Module({
  providers: [GoogleAuthService, GoogleStrategy],
  controllers: [GoogleAuthController],
})
export class GoogleAuthModule {}
