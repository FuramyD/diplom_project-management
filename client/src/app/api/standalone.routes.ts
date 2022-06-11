import { Routes } from "@angular/router";
import { LoginComponent } from "../modules/authentication/components/login/login.component";
import { AuthGuard } from "../guards/auth.guard";
import { RegistrationComponent } from "../modules/authentication/components/registration/registration.component";
import { AuthComponent } from "../modules/authentication/components/auth/auth.component";
import { ForgotPasswordComponent } from "../modules/authentication/components/forgot-password/forgot-password.component";
import { ChangePasswordComponent } from "../modules/authentication/components/change-password/change-password.component";
import { LogoutComponent } from "../modules/authentication/components/logout/logout.component";
import { RouterPageComponent } from "../views/router-page/router-page.component";
import { UserDashboardPageComponent } from "../views/user-dashboard-page/user-dashboard-page.component";
import { TeamDashboardPageComponent } from "../views/team-dashboard-page/team-dashboard-page.component";
import { PlanningPageComponent } from "../views/planning-page/planning-page.component";
import { NotFoundComponent } from "../modules/not-found/components/not-found/not-found.component";

export enum RoutePaths {
    AUTHENTICATION = "auth",
    REGISTRATION = "registration",
    LOGIN = "login",
    USER_DASHBOARD = "user-dashboard",
    TEAM_DASHBOARD = "team-dashboard",
    PLANNING = "planning",
    SETTINGS = "settings",
    LOGOUT = "logout",
    FORGOT_PASSWORD = "forgot-password",
    CHANGE_PASSWORD = "change-password",
    NOT_FOUND = "not-found"
}

export const standaloneRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: RoutePaths.USER_DASHBOARD
    },
    {
        path: RoutePaths.NOT_FOUND,
        component: NotFoundComponent
    },
    {
        path: RoutePaths.AUTHENTICATION,
        component: AuthComponent,
        children: [
            { path: RoutePaths.LOGIN, component: LoginComponent },
            { path: RoutePaths.REGISTRATION, component: RegistrationComponent },
            { path: RoutePaths.FORGOT_PASSWORD, component: ForgotPasswordComponent },
            { path: RoutePaths.CHANGE_PASSWORD, component: ChangePasswordComponent },
            { path: RoutePaths.LOGOUT, component: LogoutComponent, canActivate: [AuthGuard] },
        ]
    },
    {
        path: "",
        component: RouterPageComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            { path: RoutePaths.USER_DASHBOARD, component: UserDashboardPageComponent },
            { path: RoutePaths.TEAM_DASHBOARD, component: TeamDashboardPageComponent },
            { path: RoutePaths.PLANNING, component: PlanningPageComponent },
        ]
    },
    {
        path: "**",
        redirectTo: RoutePaths.NOT_FOUND
    }
];
