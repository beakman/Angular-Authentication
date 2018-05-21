// angular
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

// app
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
    private _authService: any;

    constructor(private _injector: Injector) {
        this._authService = this._injector.get(AuthService);
    }

    /**
     * set token in request header
     *
     * @param req
     * @param next
     * @returns {any}
     */
    intercept(req, next) {
        const _authService = this._injector.get(AuthService);
        const tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this._authService.getToken()}`
            }
        });

        return next.handle(tokenizedReq);
    }
}
