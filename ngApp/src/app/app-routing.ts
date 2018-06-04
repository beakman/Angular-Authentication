// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app
import { AuthenticationGuard } from './authentication/guards/authentication.guard';

import { RegisterComponent } from './authentication/components/register/register.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { ProfileComponent } from './profile/components/profile.component';

// routes
const routes: Routes = [
    {
        path: '',
        redirectTo: '/profile',
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: '**', // 404
        redirectTo: '/profile'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
