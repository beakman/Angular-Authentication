// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
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
     * remove token to logout the user.
     */
    public logoutUser() {
        localStorage.removeItem('token');
        this._router.navigate(['/events']);
    }

    /**
     * get token value
     *
     * @returns {string | null}
     */
    public getToken() {
        return localStorage.getItem('token');
    }
}
