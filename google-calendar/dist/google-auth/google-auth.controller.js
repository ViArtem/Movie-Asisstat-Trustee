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
exports.GoogleAuthController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const google_auth_service_1 = require("./google-auth.service");
let GoogleAuthController = class GoogleAuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async googleAuth(req) {
        return "Hello";
    }
    async googleAuthRedirect(req, res) {
        const result = await this.authService.googleLogin(req);
        return res.redirect(`${process.env.CLIENT_URL}?authResult=${JSON.stringify(result)}`);
    }
};
exports.GoogleAuthController = GoogleAuthController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("google")),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleAuthController.prototype, "googleAuth", null);
__decorate([
    (0, common_1.Get)("redirect"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("google")),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GoogleAuthController.prototype, "googleAuthRedirect", null);
exports.GoogleAuthController = GoogleAuthController = __decorate([
    (0, common_1.Controller)("google"),
    __metadata("design:paramtypes", [google_auth_service_1.GoogleAuthService])
], GoogleAuthController);
//# sourceMappingURL=google-auth.controller.js.map