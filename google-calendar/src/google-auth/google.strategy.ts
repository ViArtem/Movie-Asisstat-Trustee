import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";
import { config } from "dotenv";

import { Injectable } from "@nestjs/common";
import { UserInterface } from "src/interfaces/0Auth-user.interface";

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/google/redirect",
      scope: [
        "openid",
        "email",
        "profile",
        "https://www.googleapis.com/auth/calendar",
      ],
    });
  }

  authorizationParams(): { [key: string]: string } {
    return {
      access_type: "offline",
    };
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any
  ): Promise<UserInterface> {
    const { name, emails } = profile;

    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      accessToken,
      refreshToken,
    };
    return user;
  }
}
