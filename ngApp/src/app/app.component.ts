// angular
import { Component } from '@angular/core';

// app
import { AuthService } from './auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    constructor(private _authService: AuthService) { }

    /**
     * logout the user
     */
    public onClickLogout() {
        this._authService.logoutUser();
    }
}
