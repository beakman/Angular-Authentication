// angular
import { Component } from '@angular/core';

// app
import { AuthenticationService } from './authentication/services/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    constructor(private _authService: AuthenticationService) { }

    /**
     * logout the user
     */
    public onClickLogout() {
        this._authService.logoutUser();
    }
}
