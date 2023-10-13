import { Injectable, HttpException, Inject } from "@nestjs/common";
import { User } from "src/users/users.model";

import { UserInterface } from "src/interfaces/0Auth-user.interface";

@Injectable()
export class UsersService {
  constructor(@Inject("USER_REPOSITORY") private userRepository: typeof User) {}

  //
  async getUserByEmail(email: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne({
        where: {
          email,
        },
      });

      return user;
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, error.status || 500);
    }
  }

  //
  async getUserByAccessToken(token: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne({
        where: {
          access: token,
        },
      });

      return user;
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, error.status || 500);
    }
  }

  //
  async createNewUser(userData: UserInterface): Promise<User> {
    try {
      const user = await this.userRepository.create({
        email: userData.email,
        name: userData.firstName,
        refresh: userData.refreshToken,
        access: userData.accessToken,
      });

      return user;
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, error.status || 500);
    }
  }

  //
  async updateUserTokens(userData: UserInterface) {
    try {
      const user = await this.userRepository.update(
        { refresh: userData.refreshToken, access: userData.accessToken },
        {
          where: {
            email: userData.email,
          },
        }
      );

      return user;
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, error.status || 500);
    }
  }
}
