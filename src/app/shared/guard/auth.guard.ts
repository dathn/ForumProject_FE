import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(
            ['login'],
            {
                queryParams: { redirect: state.url },
                replaceUrl: true
            }
        );
        // if (localStorage.getItem('isLoggedin')) {
        //     return true;
        // }

        // this.router.navigate(['/login']);
        // return false;
    }
}
