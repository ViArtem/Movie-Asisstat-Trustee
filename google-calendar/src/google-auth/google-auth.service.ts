import { Injectable, Inject, HttpException } from "@nestjs/common";

import { UserInterface } from "src/interfaces/0Auth-user.interface";
import { UsersService } from "src/users/users.service";

export interface LoginInterface {
  access?: string;
  message?: string;
}

@Injectable()
export class GoogleAuthService {
  constructor(private userService: UsersService) {}

  async googleLogin(userData): Promise<LoginInterface> {
    // TODO: додати типи та інтерфейси
    try {
      if (!userData.user) {
        return { message: "No user from google" };
      }

      const candidate = await this.userService.getUserByEmail(
        userData.user.email
      );

      if (candidate) {
        await this.userService.updateUserTokens(userData.user);
      } else {
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
