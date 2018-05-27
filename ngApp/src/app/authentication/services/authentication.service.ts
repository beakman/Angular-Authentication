// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    private _userUrl = 'http://localhost:3000/api/user';
    private _loginUrl = 'http://localhost:3000/api/login';
    private _registerUrl = 'http://localhost:3000/api/register';

    constructor(
        private _http: HttpClient,
        private _router: Router
    ) { }

    /**
     * Return register user data response from server to frontend.
     *
     * @param user
     * @returns {Observable<any>}
     */
    public registerUser(user) {
        return this._http.post<any>(this._registerUrl, user);
    }

    /**
     * Return login user data response from server to frontend.
     *
     * @param user
     * @returns {Observable<Object>}
     */
    public loginUser(user) {
        return this._http.post<any>(this._loginUrl, user);
    }

    /**
     * get user login status
     *
     * @returns {boolean}
     */
    public loggedIn() {
        return !!localStorage.getItem('token');
    }

    /**
     * get current (logged in) user
     *
     * @returns {Observable<any>}
     */
    public getCurrentUser() {
        return this._http.get<any>(this._userUrl);
    }

    /**
     * remove token to logout the user.
     */
    public logoutUser() {
        localStorage.removeItem('token');
        this._router.navigate(['/events']);
    }

    /**
     * set token data
     *
     * @param item
     * @param value
     */
    public setToken(item, value) {
        return localStorage.setItem(item, value);
    }

    /**
     * get token data
     *
     * @returns {string | null}
     */
    public getToken() {
        return localStorage.getItem('token');
    }
}
