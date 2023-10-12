"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const movie_apis_module_1 = require("./movie-apis/movie-apis.module");
const config_1 = require("@nestjs/config");
const calendar_apis_module_1 = require("./calendar-apis/calendar-apis.module");
const google_auth_module_1 = require("./google-auth/google-auth.module");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("./users/users.model");
const users_module_1 = require("./users/users.module");
const movie_schedule_module_1 = require("./movie-schedule/movie-schedule.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.env`,
            }),
            movie_apis_module_1.MovieApisModule,
            calendar_apis_module_1.CalendarApisModule,
            google_auth_module_1.GoogleAuthModule,
            sequelize_1.SequelizeModule.forRoot({
                dialect: "mysql",
                host: process.env.MySQL_HOST,
                port: Number(process.env.MySQL_PORT),
                username: process.env.MySQL_USERNAME,
                password: process.env.MySQL_PASSWORD,
                database: process.env.MySQL_DATABASE,
                models: [users_model_1.User],
                autoLoadModels: true,
            }),
            users_module_1.UsersModule,
            movie_schedule_module_1.MovieScheduleModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map