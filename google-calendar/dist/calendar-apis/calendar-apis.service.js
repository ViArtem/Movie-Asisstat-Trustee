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
let CalendarApisService = class CalendarApisService {
    constructor() {
        this.auth = new googleapis_1.google.auth.OAuth2({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            redirectUri: process.env.CLIENT_URL,
        });
    }
    async createTokens(credential) {
        try {
            this.auth.setCredentials({
                access_token: "ya29.a0AfB_byBEkD_vWnNm5i6c6myzeYdA_ynWULqQYxD5pRU1Jjceqtge0Vg-uwzdANpmTb_BUOVyrsX1-9kN2tktvOJyPa4IqxE7W_EsoIH14nqcgJRXxh2J0Em0AdtE6vWPsCQqaM2KSCQUUEOFnM4xH_mKX2OUFT9G24NnaCgYKAVISARMSFQGOcNnCF-ODWvwVvWGuDWQTO3eQZQ0171",
                refresh_token: "1//09HfEqoHiyj_QCgYIARAAGAkSNwF-L9IrumCICnBeQtbD051jPClwsTPXgj9QbY1JGte342k1IaQalrvIvwh2rgoxZ1Mf4_T_fog",
            });
            this.calendar = googleapis_1.google.calendar({ version: "v3", auth: this.auth });
            const event = {
                summary: "Demo",
                description: "Тест для демонстрацїї",
                start: {
                    dateTime: "2023-10-20T16:00:00+02:00",
                    timeZone: "Europe/Kyiv",
                },
                end: {
                    dateTime: "2023-10-20T18:00:00+02:00",
                    timeZone: "Europe/Kyiv",
                },
            };
            const response = await this.calendar.events.insert({
                calendarId: "primary",
                requestBody: event,
            });
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }
    async createEvents(credential) {
        try {
            const event = {
                summary: "Demo",
                description: "Тест для демонстрацїї",
                start: {
                    dateTime: "2023-10-20T16:00:00+02:00",
                    timeZone: "Europe/Kyiv",
                },
                end: {
                    dateTime: "2023-10-20T18:00:00+02:00",
                    timeZone: "Europe/Kyiv",
                },
            };
            let calendar = googleapis_1.google.calendar("v3");
            const response = await calendar.events.insert({
                auth: this.auth,
                calendarId: "primary",
                requestBody: event,
            });
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.CalendarApisService = CalendarApisService;
exports.CalendarApisService = CalendarApisService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CalendarApisService);
//# sourceMappingURL=calendar-apis.service.js.map