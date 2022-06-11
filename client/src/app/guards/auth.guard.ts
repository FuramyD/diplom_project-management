import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
import { catchError, map, Observable, of } from "rxjs";
import { RoutePaths } from "../api/standalone.routes";
import { AuthService } from "../services/auth/auth.service";

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.getCurrentProfile().pipe(
            map(() => true),
            catchError(() => {
                this.router.navigate([RoutePaths.AUTHENTICATION, RoutePaths.LOGIN]);
                return of(false);
            })
        );
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(childRoute, state);
    }
}
