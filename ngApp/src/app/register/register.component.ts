// angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// app
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    public registerUserData = {};

    constructor(
        private _authService: AuthService,
        private _router: Router
    ) { }

    ngOnInit() { }

    /**
     * register a new user.
     */
    public onClickRegisterUser() {
        this._authService
            .registerUser(this.registerUserData)
            .subscribe(
                res => {
                    localStorage.setItem('token', res.token);
                    this._router.navigate(['/members']);
                },
                err => console.log(err)
            );
    }
}
