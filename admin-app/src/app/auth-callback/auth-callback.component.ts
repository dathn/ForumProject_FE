import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services';
import { Router, ActivatedRoute } from '@angular/router';
import { error } from 'protractor';

@Component({
    selector: 'app-auth-callback',
    templateUrl: './auth-callback.component.html',
    styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

    public error: boolean;
    constructor(
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    async ngOnInit() {
        // check error
        if (this.route.snapshot.queryParams.error) {
            this.error = true;
            return;
        }

        await this.authService.completeAuthentication();
        this.router.navigate(['/']);
    }

}
