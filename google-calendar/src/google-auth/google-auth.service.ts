import { Injectable, HttpException } from "@nestjs/common";

import { UsersService } from "src/users/users.service";
import { EventStatus } from "src/interfaces/status.interface";

@Injectable()
export class GoogleAuthService {
  constructor(private userService: UsersService) {}

  async googleLogin(userData: any): Promise<EventStatus> {
    try {
      if (!userData.user) {
        return { message: "No user from google" };
      }

      const candidate = await this.userService.getUserByEmail(
        userData.user.email
      );

      if (candidate && userData.user.refreshToken) {
        await this.userService.updateUserTokens(userData.user);
      }

      if (!candidate) {
        await this.userService.createNewUser(userData.user);
      }

      return {
        access: userData.user.accessToken,
      };
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, error.status || 500);
    }
  }
}
