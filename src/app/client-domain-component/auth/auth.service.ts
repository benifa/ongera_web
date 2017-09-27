import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
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
        this.http.post('https://ongera-api.herokuapp.com/' + this.clientId + '/login', {
            'username' : email,
            'password' : password})
            .subscribe (
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

    logout() {
        this.isLoading = true;
        this.http.post('https://ongera-api.herokuapp.com/logout', this.getHeaders())
            .subscribe (
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

    getHeaders() {
        const headersParams = new Headers();
        headersParams.append('Content-Type', 'application/json');
        headersParams.append('Authorization', 'Bearer '  + this.token);
        return new RequestOptions({headers: headersParams});
    }
}
