import { Observable } from 'rxjs/Observable';
import { OperationStatus } from './../operations/shared/operation-status.model';
import { User } from './../user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';
import { Premium } from './../premium.model';

@Injectable()
export class AuthService {
    BASE_URL = 'https://ongera-api.herokuapp.com/';
    clientId: string;
    token: String;
    refreshToken: String;
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
                        this.refreshToken = body['refresh_token'];
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
            this.http.delete(this.BASE_URL + 'logout', this.getHeaders())
                .subscribe(
                    (response: Response) => {
                        this.isLoading = false;
                        this.router.navigate([this.clientId + '/login']);
                    },
                    (error: Error) => {
                        this.isLoading = false;
                        this.router.navigate([this.clientId + '/login']);
                    }
                );
            this.token = null;
        } else {
            this.router.navigate([this.clientId ? this.clientId : 'bk' + '/login']);
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

    getRefreshHeaders() {
        const headersParams = new Headers();
        headersParams.append('Content-Type', 'application/json');
        headersParams.append('Authorization', 'Bearer ' + this.refreshToken);
        return new RequestOptions({ headers: headersParams });
    }

    getForexRate(date: string, local: string, foreign: string) {
        const respObs = this.http.get(this.BASE_URL + 'forexrate/bnr/' + date + '/' + foreign + local, this.getHeaders());
        return respObs
            .map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                })
            .catch(e => {
                if (e.status === 401) {
                    return this.refreshTokenIfNeeded(respObs);
                }
            });
    }

    getInterestRate(date: string, currency: string, maturity: number) {
        const respObs = this.http.get(this.BASE_URL + 'interestrate/bnr/' + date + '/' + currency + '/' + maturity, this.getHeaders());
        return respObs
            .map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                })
            .catch(e => {
                if (e.status === 401) {
                   return this.refreshTokenIfNeeded(respObs);
                }
            });
    }

    getExpectedDepreciation(date: string, local: string, foreign: string, maturity: number) {
        this.progressUpdated.next(new OperationStatus(0, 0, 'STARTED',
            'STARTED', 1));
        const respObs = this.http.post(this.BASE_URL + 'depreciation', {
            'pricingDate': date,
            'underlying': foreign + local,
            'maturity': maturity,
            'sourceName': 'bnr'
        }, this.getHeaders());

        return respObs
            .map(
                (response: Response) => {
                    const data = response.headers.get('location');
                    return data;
                })
            .catch(e => {
                if (e.status === 401) {
                    return this.refreshTokenIfNeeded(respObs);
                }
            });
    }

    refreshTokenIfNeeded (responseObser) {
        return this.http.post(this.BASE_URL + 'refresh', null, this.getRefreshHeaders())
        .map(
            ((response: Response) => {
                if (response['ok']) {
                    return responseObser;
                } else {
                    this.router.navigate([this.clientId + '/login']);
                }
            })
        );
    }

    getExpectationProgress(progressUri) {
        this.isLoading = true;
        return this.http.get(progressUri, this.getHeaders())
            .map(
                (response: Response) => {
                    // this.isLoading = false;
                    const data = response.json();
                    this.progressUpdated.next(data);
                    return data;
                })
            .catch(e => {
                if (e.status === 401) {
                    return this.http.post(this.BASE_URL + 'refresh', this.getRefreshHeaders)
                        .map(
                            ((response: Response) => {
                                this.getExpectationProgress(progressUri);
                            })
                        );
                }
            });
    }

    computePremium(pricingDate: string, domesticCurrency: string, foreignCurrency: string, domesticInterestRate: number,
        foreignInterestRate: number,
        maturity: number, forexRate: number, depreciation: number) {
        this.isLoading = true;
        return this.http.post(this.BASE_URL + 'premium', {
            'pricing_date': pricingDate,
            'domestic_currency': domesticCurrency,
            'foreign_currency': foreignCurrency,
            'domestic_interest_rate': domesticInterestRate,
            'foreign_interest_rate': foreignInterestRate,
            'maturity': maturity,
            'forex_rate': forexRate, 'expected_depreciation': depreciation

        }, this.getHeaders())
            .subscribe(
                (response: Response) => {
                    if (response['ok']) {
                        this.isLoading = false;
                        const premium = response.json();
                        this.premiumComputed.next(premium);
                    }
                },
                (error: Error) => {
                    this.isLoading = false;
                }
            );
    }

}
