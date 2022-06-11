import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants/auth.constants";

export interface RegistrationResponse extends ErrorResponse {
    message: string;
}

export interface AuthorizationResponse extends ErrorResponse {
    [ACCESS_TOKEN]?: string;
    [REFRESH_TOKEN]?: string;
}

export interface ProfileResponse extends ErrorResponse {
    id?: string;
}

export interface ErrorResponse {
    message?: string;
}
