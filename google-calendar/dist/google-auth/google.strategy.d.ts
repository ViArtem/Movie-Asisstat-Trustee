import { Strategy } from "passport-google-oauth20";
import { UserInterface } from "src/interfaces/0Auth-user.interface";
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleStrategy extends GoogleStrategy_base {
    constructor();
    authorizationParams(): {
        [key: string]: string;
    };
    validate(accessToken: string, refreshToken: string, profile: any): Promise<UserInterface>;
}
export {};
