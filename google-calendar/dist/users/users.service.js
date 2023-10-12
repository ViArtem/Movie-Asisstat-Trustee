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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getUserByEmail(email) {
        try {
            const user = await this.userRepository.findOne({
                where: {
                    email,
                },
            });
            return user;
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException(error.message, error.status || 500);
        }
    }
    async getUserByAccessToken(token) {
        try {
            const user = await this.userRepository.findOne({
                where: {
                    access: token,
                },
            });
            return user;
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException(error.message, error.status || 500);
        }
    }
    async createNewUser(userData) {
        try {
            const user = await this.userRepository.create({
                email: userData.email,
                name: userData.firstName,
                refresh: userData.refreshToken,
                access: userData.accessToken,
            });
            return user;
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException(error.message, error.status || 500);
        }
    }
    async updateUserTokens(userData) {
        try {
            const user = await this.userRepository.update({ refresh: userData.refreshToken, access: userData.accessToken }, {
                where: {
                    email: userData.email,
                },
            });
            return user;
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException(error.message, error.status || 500);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("USER_REPOSITORY")),
    __metadata("design:paramtypes", [Object])
], UsersService);
//# sourceMappingURL=users.service.js.map