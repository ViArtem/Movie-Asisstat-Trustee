import { Injectable } from "@nestjs/common";

@Injectable()
export class CalendarApisService {
  async createTokens(credential: string): Promise<object> {
    try {
      console.log(credential);

      return { success: "ok" };
    } catch (error) {
      console.log(error);
    }
  }
}
