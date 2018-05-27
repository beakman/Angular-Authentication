// angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// app
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    public loginUserData = {};

    constructor(
        private _authService: AuthenticationService,
        private _router: Router
    ) { }

    ngOnInit() { }

    /**
     * login a new user.
     */
    public onClickLoginUser() {
        this._authService
            .loginUser(this.loginUserData)
            .subscribe(
                res => {
                    this._authService.setToken('token', res.token);
                    this._router.navigate(['/events']);
                },
                err => console.log(err)
            );
    }
}
