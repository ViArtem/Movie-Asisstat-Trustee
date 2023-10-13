"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarApisService = void 0;
const common_1 = require("@nestjs/common");
const googleapis_1 = require("googleapis");
const users_service_1 = require("../users/users.service");
let CalendarApisService = class CalendarApisService {
    constructor(userService) {
        this.userService = userService;
        this.auth = new googleapis_1.google.auth.OAuth2({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            redirectUri: process.env.CLIENT_URL,
        });
        this.initGoogleCalendar();
    }
    async initGoogleCalendar() {
        this.calendar = googleapis_1.google.calendar({ version: "v3", auth: this.auth });
    }
    async setCalendarCredentials(access, refresh) {
        this.auth.setCredentials({
            access_token: access,
            refresh_token: refresh,
        });
        if (!this.calendar) {
            await this.initGoogleCalendar();
        }
    }
    searchPeriodForCalendarEvents() {
        const currentTime = new Date();
        const timeMin = currentTime.toISOString();
        const timeMax = new Date(currentTime.getTime() + 28 * 24 * 60 * 60 * 1000).toISOString();
        return { timeMin, timeMax };
    }
    async createEvents(eventDto, access) {
        try {
            const event = {
                summary: eventDto.title,
                description: "Сходити у кіно",
                start: {
                    dateTime: eventDto.startTime,
                    timeZone: "Europe/Kyiv",
                },
                end: {
                    dateTime: eventDto.endTime,
                    timeZone: "Europe/Kyiv",
                },
            };
            const user = await this.userService.getUserByAccessToken(access);
            await this.setCalendarCredentials(access, user.refresh);
            await this.calendar.events.insert({
                calendarId: "primary",
                requestBody: event,
            });
            return { success: "Event created" };
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException(error.message, error.status || 500);
        }
    }
    async getEventsTime(access) {
        try {
            const user = await this.userService.getUserByAccessToken(access);
            await this.setCalendarCredentials(access, user.refresh);
            const times = this.searchPeriodForCalendarEvents();
            const userEvents = await this.calendar.events.list({
                calendarId: "primary",
                timeMin: times.timeMin,
                timeMax: times.timeMax,
                maxResults: 10,
                singleEvents: true,
                orderBy: "startTime",
                timeZone: "Etc/UTC",
            });
            if (userEvents.data.items.length) {
                return userEvents.data.items.map((event) => {
                    return { start: event.start.dateTime, end: event.end.dateTime };
                });
            }
            return [];
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException(error.message, error.status || 500);
        }
    }
};
exports.CalendarApisService = CalendarApisService;
exports.CalendarApisService = CalendarApisService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], CalendarApisService);
//# sourceMappingURL=calendar-apis.service.js.map