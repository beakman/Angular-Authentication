// angular
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

// app
import { EventService } from '../event.service';

@Component({
    selector: 'app-member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.css']
})

export class MemberComponent implements OnInit {
    public memberList = [];

    constructor(
        private _memberService: EventService,
        private _router: Router
    ) { }

    ngOnInit() {
        // get a list of all members
        this._memberService
            .getMembers()
            .subscribe(
                res => this.memberList = res,
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
