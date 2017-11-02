import { User } from './../user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class AuthService {
    BASE_URL = 'https://ongera-api.herokuapp.com/';
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
        this.http.post(this.BASE_URL + this.clientId + '/login', {
            'username': email,
            'password': password
        })
            .subscribe(
            (response: Response) => {
                if (response['ok']) {
                    this.isLoading = false;
                    const body = response.json();
                    this.token = body['access_token'];
                    this.user = body['user'];
                    this.router.navigate([this.clientId + '/login', this.user.firstname]);
                }
            },
            (error: Error) => {
                this.isLoading = false;
            }
            );

    }

    getUserInformation() {
        this.isLoading = true;
        this.http.get(this.BASE_URL + this.clientId + '/user')
        .map(
            (response: Response) => {
                const data = response.json();
                return data;
            })
        .subscribe(
            (response: Response) => {
                if (response['ok']) {
                    this.isLoading = false;
                    this.user = response.json();
                }
            },
            (error: Error) => {
                this.isLoading = false;
            }
            );

    }

    logout() {
        if (this.token) {
            this.isLoading = true;
            this.http.post(this.BASE_URL + 'logout', null, this.getHeaders())
                .subscribe(
                (response: Response) => {
                    if (response['ok']) {
                        this.isLoading = false;
                        this.router.navigate([this.clientId + '/login']);
                    }
                },
                (error: Error) => {
                    this.isLoading = false;
                }
                );
            this.token = null;
        }
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

    getUserInfo() {
        return this.user;
    }

    getHeaders() {
        const headersParams = new Headers();
        headersParams.append('Content-Type', 'application/json');
        headersParams.append('Authorization', 'Bearer ' + this.token);
        return new RequestOptions({ headers: headersParams });
    }

    getForexRate(date: string, local: string, foreign: string ) {
        return this.http.get(this.BASE_URL + 'forexrate/bnr/' + date + '/' + foreign + local, this.getHeaders())
        .map(
            (response: Response) => {
                const data = response.json();
                return data;
            });
    }

    getInterestRate(date: string, currency: string, maturity: number ) {
        return this.http.get(this.BASE_URL + 'interestrate/bnr/' + date + '/' + currency + '/' + maturity, this.getHeaders())
        .map(
            (response: Response) => {
                const data = response.json();
                return data;
            });
    }

    getExpectedDepreciation(date: string, local: string, foreign: string, maturity: number ) {
        return this.http.get(this.BASE_URL + 'forexrate/bnr/' + date + '/' + foreign + local + '/' + maturity, this.getHeaders())
        .map(
            (response: Response) => {
                const data = response.json();
                return data;
            });
    }


}
