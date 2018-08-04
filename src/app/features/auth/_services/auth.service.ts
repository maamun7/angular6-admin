import { Injectable } from "@angular/core";
import { Headers, RequestOptions } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
//import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';
import { Helpers } from "../../../utils/helpers";

@Injectable()
export class AuthService {

	constructor(private http: HttpClient) {
	}
	
	verify() {
		return this.http.get(`${Helpers.API_HOST}authenticate`).map((response: Response) => response);
	}

	login(email: string, password: string) {
		return this.http.post(`${Helpers.API_HOST}login`, { email: email, password: password })
			.map((res: any) => { 
				if (res && res.token) {
					// store user details and jwt token in local storage to keep user logged in between page refreshes
					this.setToken(res);
				}
				return res;
			});
	}

	logout() {
		// remove user from local storage to log user out
		return this.removeToken();
	}

	private setToken(response) {
		localStorage.setItem('currentUser', JSON.stringify(response));
		return true;
	}

	getToken() {
		const currentUser = JSON.parse(localStorage.getItem('currentUser'));
		if (currentUser && currentUser.token) {
			console.log('Gotten jwt :', currentUser);
			return currentUser.token;
		}
		return '';
	}

	removeToken() {
		localStorage.removeItem('currentUser');
		return true;
	}
}