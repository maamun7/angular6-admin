import { Injectable } from "@angular/core";
import { Headers, RequestOptions, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { Helpers } from "../../../utils/helpers";

@Injectable()
export class AuthService {

	constructor(private http: HttpClient) {
	}
	
	verify() {
		return this.http.get(`${Helpers.API_HOST}authenticate`).map((response: Response) => response.json());
	}

	login(email: string, password: string) {
		//let headers = new Headers({'Content-Type': 'application/json'});
		return this.http.post(`${Helpers.API_HOST}login`, { email: email, password: password })
			.map((response: Response) => {
				// login successful if there's a jwt token in the response
				let res = response.json();


				console.log('DEBUGG res:', res);

				if (res && res.token) {
					// store user details and jwt token in local storage to keep user logged in between page refreshes
					localStorage.setItem('currentUser', JSON.stringify(res));
				}
				return res;
			}); 
	}

	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('currentUser');
	}

	getToken() {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		if (currentUser && currentUser.token) {
			console.log('Gotten jwt :', currentUser.token);
			return currentUser.token;
		}
		return '';
	}
}