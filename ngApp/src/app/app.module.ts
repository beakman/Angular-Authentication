// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// app
import { AppRoutingModule } from './app-routing';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { EventService } from './event.service';
import { TokenInterceptorService } from './token-interceptor.service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { MemberComponent } from './members/member.component';
import { NewEventComponent } from './events/new-event.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        EventsComponent,
        MemberComponent,
        NewEventComponent
    ],
    providers: [
        AuthService,
        AuthGuard,
        EventService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
