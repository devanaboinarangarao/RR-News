import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators'
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    
    apiUrl : string = environment.apiUrl;

    httpOptions = { 
        headers : new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization' : ''
        })
    };

    constructor(private http : HttpClient) {

    }

    attachAuthTokenHeader(token) {
        this.httpOptions.headers.set('Authorization', 'Bearer '+token);
    }

    sampleLogin() {
        localStorage.setItem('token', 'sample test');
        return Observable.create((observer) => {
            observer.next('Helloooo')
        })
    }

    get(path, token) {
        this.attachAuthTokenHeader(token);
        return this.http.get(this.apiUrl+path, this.httpOptions).pipe(catchError(this.handleError));
    }

    post(path,token, body) {
        this.attachAuthTokenHeader(token);
        return this.http.post(this.apiUrl+path, body, this.httpOptions).pipe(catchError(this.handleError));
    }

    getToken() {
        return localStorage.getItem("token");
    }

    handleError(error : HttpErrorResponse) {
        console.log(error);
        return Observable.throw("Some Error Occured at Serverside")
    }
}