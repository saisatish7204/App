import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class WorkReportService {

    constructor(private http: HttpClient) {}

    saveWorkReport(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

}