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
exports.MovieScheduleService = void 0;
const common_1 = require("@nestjs/common");
const calendar_apis_service_1 = require("../calendar-apis/calendar-apis.service");
let MovieScheduleService = class MovieScheduleService {
    constructor(calendarService) {
        this.calendarService = calendarService;
    }
    async getPossibleMovieTime(movieTime, accessToken) {
        try {
            const slotsInCalendar = await this.calendarService.getEventsTime(accessToken);
            function checkCondition(time) {
                for (const interval of slotsInCalendar) {
                    if ((time.start >= interval.start && time.start <= interval.end) ||
                        (time.end >= interval.start && time.end <= interval.end)) {
                        return false;
                    }
                }
                return true;
            }
            const availableTime = movieTime.filter(checkCondition);
            return availableTime;
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException(error.message, error.status || 500);
        }
    }
};
exports.MovieScheduleService = MovieScheduleService;
exports.MovieScheduleService = MovieScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [calendar_apis_service_1.CalendarApisService])
], MovieScheduleService);
//# sourceMappingURL=movie-schedule.service.js.map