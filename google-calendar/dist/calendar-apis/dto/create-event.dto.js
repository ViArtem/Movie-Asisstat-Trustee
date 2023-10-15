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
exports.CreateEventDto = void 0;
const class_validator_1 = require("class-validator");
class CreateEventDto {
}
exports.CreateEventDto = CreateEventDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "Value title must be a string" }),
    (0, class_validator_1.Matches)(/^(?!\s*$).+/, {
        message: "Value title must not consist of only spaces",
    }),
    (0, class_validator_1.IsDefined)({ message: "Value title must be defined" }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Value startTime must be a string" }),
    (0, class_validator_1.Matches)(/^(?!\s*$).+/, {
        message: "Value startTime must not consist of only spaces",
    }),
    (0, class_validator_1.IsDefined)({ message: "Value startTime must be defined" }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "startTime", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Value endTime must be a string" }),
    (0, class_validator_1.Matches)(/^(?!\s*$).+/, {
        message: "Value endTime must not consist of only spaces",
    }),
    (0, class_validator_1.IsDefined)({ message: "Value endTime must be defined" }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "endTime", void 0);
//# sourceMappingURL=create-event.dto.js.map