import { Injectable } from "@nestjs/common";

@Injectable()
export class GoogleAuthService {
  constructor() {}

  googleLogin(userData) {
    if (!userData.user) {
      return "No user from google";
    }
    // зберегти користувача в базі його рефреш ім'я та пошту
    // виклиикати api на отримання списку фільмів або перенаправити на цей роутер
    console.log(userData);

    return {
      message: "User information from google",
      user: userData.user,
    };
  }
}
