"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarApisModule = void 0;
const common_1 = require("@nestjs/common");
const calendar_apis_controller_1 = require("./calendar-apis.controller");
const calendar_apis_service_1 = require("./calendar-apis.service");
let CalendarApisModule = class CalendarApisModule {
};
exports.CalendarApisModule = CalendarApisModule;
exports.CalendarApisModule = CalendarApisModule = __decorate([
    (0, common_1.Module)({
        controllers: [calendar_apis_controller_1.CalendarApisController],
        providers: [calendar_apis_service_1.CalendarApisService]
    })
], CalendarApisModule);
//# sourceMappingURL=calendar-apis.module.js.map