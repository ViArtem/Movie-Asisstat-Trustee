export declare class GoogleAuthService {
    constructor();
    googleLogin(userData: any): "No user from google" | {
        message: string;
        user: any;
    };
}
