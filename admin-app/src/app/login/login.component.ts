import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { AuthService } from '../shared/services';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(
        // public router: Router,
        private spinner: NgxSpinnerService,
        private authService: AuthService
    ) { }

    ngOnInit() { }

    onLoggedin() {
        // localStorage.setItem('isLoggedin', 'true');
        this.spinner.show();
        this.authService.login();
    }
}
