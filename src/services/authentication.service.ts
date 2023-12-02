import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    userSubject;
    user;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(username: string) {
        let connectUser = {
            username:username,
            apikey:environment.apikey
        }

        const params = new HttpParams({
            fromObject :{
                username:username,
                apikey:environment.apikey
            }
          });
        return this.http.post<any>(`${environment.preqinBaseUrl}connect/token`,params,{
            headers: new HttpHeaders({
              'Content-Type':'application/x-www-form-urlencoded'
            })
        })
            .pipe(map(user => {
                user.username = username;
                localStorage.setItem(  'access_token', user.access_token);
                localStorage.setItem(  "refresh_token", user.refresh_token);

                //let testDate = Date.now() + 4 * 3600 * 1000;
                localStorage.setItem(  "expires_in", user.expires_in);
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                //this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}