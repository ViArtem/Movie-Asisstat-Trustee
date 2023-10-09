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
exports.UserCredentialsDto = void 0;
const class_validator_1 = require("class-validator");
class UserCredentialsDto {
}
exports.UserCredentialsDto = UserCredentialsDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "Value must be a string" }),
    (0, class_validator_1.Matches)(/^(?!\s*$).+/, {
        message: "Value credentials must not consist of only spaces",
    }),
    (0, class_validator_1.IsDefined)({ message: "Value name must be defined" }),
    __metadata("design:type", String)
], UserCredentialsDto.prototype, "credentials", void 0);
//# sourceMappingURL=user-credentials.dto.js.map