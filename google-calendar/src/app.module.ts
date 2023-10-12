import { Module } from "@nestjs/common";
import { MovieApisModule } from "./movie-apis/movie-apis.module";
import { ConfigModule } from "@nestjs/config";
import { CalendarApisModule } from "./calendar-apis/calendar-apis.module";
import { GoogleAuthModule } from "./google-auth/google-auth.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
    MovieApisModule,
    CalendarApisModule,
    GoogleAuthModule,

    SequelizeModule.forRoot({
      dialect: "mysql",
      host: process.env.MySQL_HOST,
      port: Number(process.env.MySQL_PORT),
      username: process.env.MySQL_USERNAME,
      password: process.env.MySQL_PASSWORD,
      database: process.env.MySQL_DATABASE,
      models: [User],
      autoLoadModels: true,
    }),

    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
