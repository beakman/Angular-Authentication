// angular
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

// app
import { EventService } from '../event.service';

@Component({
    selector: 'app-new-events',
    templateUrl: './all-events.component.html',
    styleUrls: ['./all-events.component.css']
})

export class AllEventsComponent implements OnInit {
    public eventsList = [];

    constructor(
        private _eventsService: EventService,
        private _router: Router
    ) { }

    ngOnInit() {
        // get a list of events
        this._eventsService
            .getEvents()
            .subscribe(
                res => this.eventsList = res,
                err => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401 || err.status === 500) {
                            this._router.navigate(['/login']);
                        }
                    }
                }
            );
    }
}
