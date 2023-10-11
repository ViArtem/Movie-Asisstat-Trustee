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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarApisController = void 0;
const common_1 = require("@nestjs/common");
const calendar_apis_service_1 = require("./calendar-apis.service");
const user_credentials_dto_1 = require("./dto/user-credentials.dto");
let CalendarApisController = class CalendarApisController {
    constructor(calendarService) {
        this.calendarService = calendarService;
    }
    createTokens(userCredentials) {
        return this.calendarService.createTokens(userCredentials.credential);
    }
    createEvent(userCredentials) {
        return this.calendarService.createEvents(userCredentials.credential);
    }
};
exports.CalendarApisController = CalendarApisController;
__decorate([
    (0, common_1.Post)("create-tokens"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_credentials_dto_1.UserCredentialsDto]),
    __metadata("design:returntype", void 0)
], CalendarApisController.prototype, "createTokens", null);
__decorate([
    (0, common_1.Post)("create-post"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_credentials_dto_1.UserCredentialsDto]),
    __metadata("design:returntype", void 0)
], CalendarApisController.prototype, "createEvent", null);
exports.CalendarApisController = CalendarApisController = __decorate([
    (0, common_1.Controller)("calendar"),
    __metadata("design:paramtypes", [calendar_apis_service_1.CalendarApisService])
], CalendarApisController);
//# sourceMappingURL=calendar-apis.controller.js.map