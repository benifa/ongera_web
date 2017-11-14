import { OperationStatus } from './../operations/shared/operation-status.model';
import { User } from './../user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
// import 'rxjs/Rx';
// import {Map} from 'rxjs/Map';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Premium } from './../premium.model';

@Injectable()
export class AuthService {
    BASE_URL = 'https://ongera-api.herokuapp.com/';
    clientId: string;
    token: String;
    user: User;
    isLoading: boolean;
    premiumComputed = new Subject<Premium>();
    progressUpdated = new Subject<OperationStatus>();
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
        // this.isLoading = true;
        this.http.get(this.BASE_URL + this.clientId + '/user')
        .map(
            (response: Response) => {
                const data = response.json();
                return data;
            })
        .subscribe(
            (response: Response) => {
                this.isLoading = false;
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
        this.progressUpdated.next(new OperationStatus (0, 0, 'STARTED',
        'STARTED',  1));
        return this.http.post(this.BASE_URL + 'depreciation',  {
            'pricingDate' : date,
            'underlying' : foreign + local,
            'maturity' : maturity,
            'sourceName' : 'bnr'
        }, this.getHeaders())
        .map(
            (response: Response) => {
                const data = response.headers.get('location');
                return data;
            });
    }

    getExpectationProgress(progressUri) {
        this.isLoading = true;
        return this.http.get(progressUri, this.getHeaders())
        .map(
            (response: Response) => {
                const data = response.json();
                this.progressUpdated.next(data);
                return data;
            });
    }

    computePremium(pricingDate: string, domesticCurrency: string, foreignCurrency: string, domesticInterestRate: number,
        foreignInterestRate: number,
         maturity: number, forexRate: number, depreciation: number) {
        this.isLoading = true;
        return this.http.post(this.BASE_URL + 'premium',  {
            'pricing_date' : pricingDate,
            'domestic_currency' : domesticCurrency,
            'foreign_currency' : foreignCurrency,
            'domestic_interest_rate': domesticInterestRate,
            'foreign_interest_rate': foreignInterestRate,
            'maturity' : maturity,
            'forex_rate' : forexRate, 'expected_depreciation' : depreciation

        }, this.getHeaders())
        .subscribe(
            (response: Response) => {
                if (response['ok']) {
                    this.isLoading = false;
                    const premium  = response.json();
                    this.premiumComputed.next(premium);
                }
            },
            (error: Error) => {
                this.isLoading = false;
                this.isLoading = false;
            }
            );
    }

}
