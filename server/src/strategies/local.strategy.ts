import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../services/auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: "login"
        });
    }

    public async validate(login: string, password: string): Promise<unknown> {
        const user = await this.authService.validateUser(login, password);

        if (!user) {
            throw new UnauthorizedException({ message: "Вы ввели неправильный логин или пароль" });
        }
        const { password: pass, ...securedUser } = user;
        return securedUser;
    }
}