// angular
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// app
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(
        private _router: Router,
        private _authService: AuthenticationService
    ) { }

    /**
     * check logged in status
     *
     * @returns {boolean}
     */
    canActivate(): boolean {
        if (this._authService.isLoggedIn()) {
            return true;
        } else {
            this._router.navigate(['/login']);
            return false;
        }
    }
}
