import { Inject, Injectable } from "@angular/core";
import { LOCAL_STORAGE } from "@ng-web-apis/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { apiRoutes } from "../../api/api.routes";
import { Observable, switchMap } from "rxjs";
import { RestApiService } from "../rest-api/rest-api.service";
import { RestApiRequestOptions } from "../../models/rest-api.model";
import { AuthorizationResponse, ProfileResponse, RegistrationResponse } from "../../models/response.model";
import { LoginParameters, RegistrationParameters } from "../../models/login.model";
import { ACCESS_TOKEN } from "../../constants/auth.constants";

@Injectable({
    providedIn: "root"
})
export class AuthService {

    constructor(
        @Inject(LOCAL_STORAGE) private localStorageRef: Storage,
        private http: HttpClient,
        private restApiService: RestApiService
    ) {}

    private static getUrl(name: string): string {
        return `${apiRoutes.gateways.publicGateWay}/${apiRoutes.urls[name]}`;
    }

    public getAuthorizationOptions(): RestApiRequestOptions {
        const token = this.localStorageRef.getItem(ACCESS_TOKEN);
        const headers = new HttpHeaders().append("Authorization", `Bearer ${token}`);
        return { headers };
    }

    public getCurrentProfile(): Observable<ProfileResponse> {
        return this.restApiService.get<ProfileResponse>("profile", {
            request: this.getAuthorizationOptions()
        });
    }

    public login(loginParameters: LoginParameters): Observable<ProfileResponse> {
        return this.restApiService.post<AuthorizationResponse>("login", loginParameters).pipe(
            switchMap((response: AuthorizationResponse) => {
                this.localStorageRef.setItem(ACCESS_TOKEN, response[ACCESS_TOKEN]);
                return this.getCurrentProfile();
            })
        );
    }

    public registration(registrationParameters: RegistrationParameters): Observable<RegistrationResponse> {
        return this.restApiService.post<RegistrationResponse>("registration", registrationParameters);
    }

    public restorePassword(email: string): Observable<boolean> {
        return this.restApiService.post<boolean>("restorePassword", { email });
    }

    public changePassword(id: string, password: string): Observable<boolean> {
        return this.restApiService.post<boolean>("changePassword", { id, password });
    }
}
