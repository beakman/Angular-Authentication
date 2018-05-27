// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventService {
    private _eventsUrl = 'http://localhost:3000/api/events';

    constructor(private _http: HttpClient) { }

    /**
     * get list of events
     *
     * @returns {Observable<any>}
     */
    public getEvents() {
        return this._http.get<any>(this._eventsUrl);
    }
}
