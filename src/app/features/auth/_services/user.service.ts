import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import { User } from "../_models/index";
import { Helpers } from "../../../utils/helpers";

@Injectable()
export class UserService {
	constructor(private http: Http) {

	}

	forgotPassword(email: string) {
		return this.http.post('/api/forgot-password', JSON.stringify({email}), Helpers.jwt()).map((response: Response) => response.json());
	}

	getAll() {
		return this.http.get('/api/users', Helpers.jwt()).map((response: Response) => response.json());
	}

	getById(id: number) {
		return this.http.get('/api/users/' + id, Helpers.jwt()).map((response: Response) => response.json());
	}

	create(user: User) {
		return this.http.post('/api/users', user, Helpers.jwt()).map((response: Response) => response.json());
	}

	update(user: User) {
		return this.http.put('/api/users/' + user.id, user, Helpers.jwt()).map((response: Response) => response.json());
	}

	delete(id: number) {
		return this.http.delete('/api/users/' + id, Helpers.jwt()).map((response: Response) => response.json());
	}
}