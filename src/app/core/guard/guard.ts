import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    userFromStorage = localStorage.getItem('userData');

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = JSON.parse(this.userFromStorage);
        if (user && user.isLogined) {
            // logged in so return true
            return true;
        }

            // not logged in so redirect to login page with the return url
        this.router.navigate(['login']);
        return false;
    }
}
