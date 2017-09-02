import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: String;
    isLoading: boolean;
    constructor(private http: Http, private router: Router) {

    }

    signUpUser(email: string, password: string) {
    }

    loginUser(email: string, password: string) {
        this.isLoading = true;
        this.http.post('https://ongera-api.herokuapp.com/bk/login', {
            'username' : email,
            'password' : password})
            .subscribe (
                (response: Response) => {
                    this.isLoading = false;
                    this.token = response['access-token'];
                },
                (error: Error) => {
                    this.isLoading = false;
                }
            );

    }

    logout() {
        this.token = null;
    }

    getToken() {
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    isAuthenticating() {
        return this.isLoading;
    }
}
