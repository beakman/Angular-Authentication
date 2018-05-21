// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app
import { AuthGuard } from './auth.guard';

import { MemberComponent } from './members/member.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';

// routes v
const routes: Routes = [
    {
        path: '',
        redirectTo: '/events',
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
        path: 'events',
        component: EventsComponent
    },
    {
        path: 'members',
        component: MemberComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
