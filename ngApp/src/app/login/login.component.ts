// angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// app
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    public loginUserData = {};

    constructor(
        private _authService: AuthService,
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
                    localStorage.setItem('token', res.token);
                    this._router.navigate(['/members']);
                },
                err => console.log(err)
            );
    }
}
