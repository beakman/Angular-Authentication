// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app
import { AuthenticationGuard } from './authentication/guards/authentication.guard';

import { RegisterComponent } from './authentication/components/register/register.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { NewEventComponent } from './events/components/new-event.component';
import { AllEventsComponent } from './events/components/all-events.component';

// routes
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
        path: 'new-event',
        component: NewEventComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'events',
        component: AllEventsComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: '**', // 404
        redirectTo: '/events'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
