import { Component, OnInit } from "@angular/core";
import { RxUnsubscribe } from "../../common/rx-unsubscribe";
import { AuthService } from "../../services/auth/auth.service";
import { Observable } from "rxjs";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user/user.service";
import { UserHelper } from "../../common/helpers/user.helper";

@Component({
    selector: "pm-router-page",
    templateUrl: "./router-page.component.html",
    styleUrls: ["./router-page.component.less"]
})
export class RouterPageComponent extends RxUnsubscribe implements OnInit {

    constructor(
        private authService: AuthService,
        private userService: UserService
    ) {
        super();
    }

    _user$: Observable<User>;

    ngOnInit(): void {
        this.userService.loadCurrentUser();
        this._user$ = this.userService.selectCurrentUser();
    }

    _getFullName(user: User): string {
        return UserHelper.getFullName(user);
    }

}
