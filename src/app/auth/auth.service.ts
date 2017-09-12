import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class AuthService {
    clientId: string;
    token: String;
    user: User;
    isLoading: boolean;
    constructor(private http: Http, private router: Router, private route: ActivatedRoute) {

    }

    signUpUser(email: string, password: string) {
    }

    loginUser(email: string, password: string) {
        this.isLoading = true;
        this.http.post('https://ongera-api.herokuapp.com/' + 'bk' + '/login', {
            'username' : email,
            'password' : password})
            .subscribe (
                (response: Response) => {
                    if (response['ok']) {
                    this.isLoading = false;
                    const body = response.json();
                    this.token = body['access_token'];
                    this.user = body['user'];
                    this.router.navigate(['bk/operations']);
                    }
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

    setClientId(id: string) {
        this.clientId = id;
    }

    getClientId() {
        return this.clientId;
    }

    getUserInfo () {
        return this.user;
    }
}
