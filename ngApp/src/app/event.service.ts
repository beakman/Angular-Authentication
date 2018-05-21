// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventService {
    private _eventsUrl = 'http://localhost:3000/api/events';
    private _specialEventsUrl = 'http://localhost:3000/api/special';

    constructor(private _http: HttpClient) { }

    /**
     * get list of events
     *
     * @returns {Observable<any>}
     */
    public getEvents() {
        return this._http.get<any>(this._eventsUrl);
    }

    /**
     * get list of special events
     *
     * @returns {Observable<any>}
     */
    public getSpecialEvents() {
        return this._http.get<any>(this._specialEventsUrl);
    }
}
