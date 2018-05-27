// angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// app
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    public registerUserData = {};

    constructor(
        private _authService: AuthenticationService,
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
                    this._authService.setToken(res.token);
                    this._router.navigate(['/events']);
                },
                err => console.log(err)
            );
    }
}
