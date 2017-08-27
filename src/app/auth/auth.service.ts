import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: String;
    constructor(private router: Router) {

    }

    signUpUser(email: string, password: string) {
    }

    loginUser(email: string, password: string) {
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
}
