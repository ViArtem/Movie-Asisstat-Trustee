"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieApisService = void 0;
const common_1 = require("@nestjs/common");
let MovieApisService = class MovieApisService {
    async getMoviesList() {
        try {
            const url = "https://api.themoviedb.org/3/authentication";
            const options = {
                method: "GET",
                headers: { accept: "application/json" },
            };
            fetch(url, options)
                .then((res) => res.json())
                .then((json) => console.log(json))
                .catch((err) => console.error("error:" + err));
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException(error.message, error.status);
        }
    }
};
exports.MovieApisService = MovieApisService;
exports.MovieApisService = MovieApisService = __decorate([
    (0, common_1.Injectable)()
], MovieApisService);
//# sourceMappingURL=movie-apis.service.js.map