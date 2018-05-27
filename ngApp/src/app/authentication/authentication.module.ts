// angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// app
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuard } from './guards/authentication.guard';

@NgModule({
    imports: [ FormsModule ],
    declarations: [
        RegisterComponent,
        LoginComponent
    ],
    exports: [
        RegisterComponent,
        LoginComponent
    ],
    providers: [
        AuthenticationService,
        AuthenticationGuard
    ]
})

export class AuthenticationModule { }
