import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export abstract class BaseService {

    constructor() { }

    protected handleError(error: any) {
        const applicationError = error.headers.get('Application Error');

        if (applicationError) {
            return throwError(applicationError);
        }

        let modelStateError = '';

        for (const key in error.error) {
            if (error.error[key]) {
                modelStateError += error.error[key].description + '\n';
            }
        }

        modelStateError = modelStateError = '' ? null : modelStateError;
        return throwError(modelStateError || 'Server Error');
    }
}
