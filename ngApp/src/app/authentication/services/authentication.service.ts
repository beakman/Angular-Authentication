// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// app
import { UserInterface } from '../interfaces/user.interface';

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
    public isLoggedIn(): boolean {
        const user = this.getCurrentUser();
        if (user) {
            // validate: expiry date
            return user.exp > Date.now() / 1000;
        } else { return false; }
    }

    /**
     * get current (logged in) user
     *
     * @returns {UserInterface}
     */
    public getCurrentUser(): UserInterface {
        const token = this.getToken();
        if (token) {
            let payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        } else { return null; }
    }

    /**
     * remove token to logout the user.
     */
    public logoutUser() {
        this.removeToken();
        this._router.navigate(['/events']);
    }

    /**
     * set token
     *
     * @param value
     */
    public setToken(value) {
        return localStorage.setItem('token', value);
    }

    /**
     * get token
     *
     * @returns {string | null}
     */
    public getToken() {
        return localStorage.getItem('token');
    }

    /**
     * remove token
     */
    public removeToken() {
        localStorage.removeItem('token');
    }
}
