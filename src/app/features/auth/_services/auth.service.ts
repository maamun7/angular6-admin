import { Injectable } from "@angular/core";
import { Headers, RequestOptions, Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { Helpers } from "../../../utils/helpers";

@Injectable()
export class AuthService {

	constructor(private http: Http) {
	}
	
	verify() {
		return this.http.get(`${Helpers.API_HOST}authenticate`, Helpers.jwt()).map((response: Response) => response.json());
	}

	login(email: string, password: string) {
		let headers = new Headers({'Content-Type': 'application/json'});
		return this.http.post(`${Helpers.API_HOST}login`, { email: email, password: password }, {headers: headers})
			.map((response: Response) => {
				// login successful if there's a jwt token in the response
				let res = response.json();
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
}