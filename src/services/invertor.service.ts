import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../environments/environment';

@Injectable({ providedIn: 'root' })
export class investorService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any>(`${environment.preqinBaseUrl}api/investor`);
    }

    getFilteredList(data:any){
        return this.http.get<any>(`${environment.preqinBaseUrl}api/investor`,{ params: data });
    }

}