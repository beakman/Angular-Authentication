// angular
import { Component, OnInit } from '@angular/core';

// app
import { EventService } from '../event.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
    public eventsList = [];

    constructor(private _eventsService: EventService) { }

    ngOnInit() {
        // get a list of events
        this._eventsService
            .getEvents()
            .subscribe(
                res => this.eventsList = res,
                err => console.log(err)
            );
    }
}
