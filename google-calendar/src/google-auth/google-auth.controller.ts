import { Controller, Get, Post, Body, UseGuards, Req } from "@nestjs/common";

import { AuthGuard } from "@nestjs/passport";
import { GoogleAuthService } from "./google-auth.service";

@Controller("google")
export class GoogleAuthController {
  constructor(private readonly authService: GoogleAuthService) {}

  @Get()
  @UseGuards(AuthGuard("google"))
  async googleAuth(@Req() req) {
    console.log("Heloo");

    return "Hello";
  }

  @Get("redirect")
  @UseGuards(AuthGuard("google"))
  googleAuthRedirect(@Req() req) {
    return this.authService.googleLogin(req);
  }
}
