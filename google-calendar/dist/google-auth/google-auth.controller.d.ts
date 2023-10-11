import { GoogleAuthService } from "./google-auth.service";
export declare class GoogleAuthController {
    private readonly authService;
    constructor(authService: GoogleAuthService);
    googleAuth(req: any): Promise<string>;
    googleAuthRedirect(req: any): "No user from google" | {
        message: string;
        user: any;
    };
}
