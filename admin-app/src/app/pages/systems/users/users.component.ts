import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models';
import { UsersService } from '../../../shared/services/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    public user$: Observable<User[]>;
    constructor(
        private userServices: UsersService
    ) { }

    ngOnInit() {
        this.user$ = this.userServices.getAll();
    }

}
