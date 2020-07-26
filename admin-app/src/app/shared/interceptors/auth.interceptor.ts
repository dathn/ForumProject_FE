import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services';

@Injectable({
    providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        request = request.clone({
            setHeaders: {
                Authorization: `${this.authService.authorizationHeaderValue}`
            }
        });
        return next.handle(request);
    }
}
