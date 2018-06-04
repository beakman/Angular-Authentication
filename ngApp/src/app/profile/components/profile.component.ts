// angular
import { Component, OnInit } from '@angular/core';

// app
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { UserInterface } from '../../authentication/interfaces/user.interface';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    public profileData: UserInterface;

    constructor(
        private _authService: AuthenticationService
    ) { }

    ngOnInit() {
        this.profileData = this._authService.getCurrentUser();

        console.log(this.profileData);
    }
}
