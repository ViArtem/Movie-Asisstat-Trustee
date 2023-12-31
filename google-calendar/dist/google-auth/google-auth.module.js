"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAuthModule = void 0;
const common_1 = require("@nestjs/common");
const google_auth_service_1 = require("./google-auth.service");
const google_auth_controller_1 = require("./google-auth.controller");
const google_strategy_1 = require("./google.strategy");
const users_module_1 = require("../users/users.module");
let GoogleAuthModule = class GoogleAuthModule {
};
exports.GoogleAuthModule = GoogleAuthModule;
exports.GoogleAuthModule = GoogleAuthModule = __decorate([
    (0, common_1.Module)({
        providers: [google_auth_service_1.GoogleAuthService, google_strategy_1.GoogleStrategy],
        controllers: [google_auth_controller_1.GoogleAuthController],
        imports: [(0, common_1.forwardRef)(() => users_module_1.UsersModule)],
        exports: [google_auth_service_1.GoogleAuthService],
    })
], GoogleAuthModule);
//# sourceMappingURL=google-auth.module.js.map