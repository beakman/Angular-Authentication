// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// app
import { AllEventsComponent } from './components/all-events.component';
import { NewEventComponent } from './components/new-event.component';
import { EventService } from './services/event.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AllEventsComponent,
        NewEventComponent
    ],
    exports: [
        AllEventsComponent,
        NewEventComponent
    ],
    providers: [ EventService ]
})

export class EventsModule { }
