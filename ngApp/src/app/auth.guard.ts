// angular
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// app
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private _router: Router,
        private _authService: AuthService
    ) { }

    /**
     * check logged in status
     *
     * @returns {boolean}
     */
    canActivate(): boolean {
        if (this._authService.loggedIn()) {
            return true;
        } else {
            this._router.navigate(['/login']);
            return false;
        }
    }
}
