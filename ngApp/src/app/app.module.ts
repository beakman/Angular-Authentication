// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// app
import { AppRoutingModule } from './app-routing';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthGuard } from './auth.guard';
import { EventService } from './event.service';
import { TokenInterceptorService } from './token-interceptor.service';

import { AppComponent } from './app.component';
import { AllEventsComponent } from './events/all-events.component';
import { NewEventComponent } from './events/new-event.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        AuthenticationModule
    ],
    declarations: [
        AppComponent,
        AllEventsComponent,
        NewEventComponent
    ],
    providers: [
        AuthGuard,
        EventService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        }
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
