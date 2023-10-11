import { Module } from "@nestjs/common";
import { MovieApisModule } from "./movie-apis/movie-apis.module";
import { ConfigModule } from "@nestjs/config";
import { CalendarApisModule } from "./calendar-apis/calendar-apis.module";
import { GoogleAuthModule } from './google-auth/google-auth.module';

@Module({
  imports: [ConfigModule.forRoot(), MovieApisModule, CalendarApisModule, GoogleAuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
