import { Controller, Get, UseGuards, Req, Redirect, Res } from "@nestjs/common";

import { AuthGuard } from "@nestjs/passport";
import { GoogleAuthService } from "./google-auth.service";

@Controller("google")
export class GoogleAuthController {
  constructor(private readonly authService: GoogleAuthService) {}

  @Get()
  @UseGuards(AuthGuard("google"))
  async googleAuth(@Req() req) {
    return "Hello";
  }

  @Get("redirect")
  @UseGuards(AuthGuard("google"))
  async googleAuthRedirect(@Req() req, @Res() res) {
    const result = await this.authService.googleLogin(req);

    return res.redirect(
      `${process.env.CLIENT_URL}?authResult=${JSON.stringify(result)}`
    );
  }
}
