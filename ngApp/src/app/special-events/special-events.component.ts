// angular
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

// app
import { EventService } from '../event.service';

@Component({
    selector: 'app-special-events',
    templateUrl: './special-events.component.html',
    styleUrls: ['./special-events.component.css']
})

export class SpecialEventsComponent implements OnInit {
    public specialEventsList = [];

    constructor(
        private _specialEventsService: EventService,
        private _router: Router
    ) { }

    ngOnInit() {
        // get a list of special events
        this._specialEventsService
            .getSpecialEvents()
            .subscribe(
                res => this.specialEventsList = res,
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
