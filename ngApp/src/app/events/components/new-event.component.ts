// angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})

export class NewEventComponent implements OnInit {
    public eventData = {};

    constructor() { }

    ngOnInit() { }

    public onClickNewEvent() {
        console.log(this.eventData);
    }
}
