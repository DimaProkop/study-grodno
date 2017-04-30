/**
 * Created by dionp on 29.04.2017.
 */
import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../service/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  canActivate() {
    if (this.authService.isAuthorize()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
