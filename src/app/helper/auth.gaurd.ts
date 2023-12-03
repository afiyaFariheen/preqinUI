import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from './../../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authenticationService.userValue;
        if (user && this.isTokenValid() ) {
            return true;
        }
        this.clearSession();
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/connect'], { queryParams: { returnUrl: state.url } });
        return false;
    }

    isTokenValid(): boolean {
        let expiry_date = localStorage.getItem("expire_time");
        if (Date.now() >= Number(expiry_date) || !expiry_date) {
            return false;
        }
        return true;
    }

    clearSession() {
        localStorage.removeItem('access_token');
        localStorage.removeItem("refresh_token");

        localStorage.removeItem("expire_time");
        localStorage.removeItem('user');
    }
}