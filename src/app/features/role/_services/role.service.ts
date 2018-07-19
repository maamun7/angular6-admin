import { Injectable } from "@angular/core";
import { Headers, RequestOptions, Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { Helpers } from "../../../utils/helpers";
import { Role } from "../_models/role.model";

@Injectable()
export class RoleService {

	private listUrl: string = `${Helpers.API_HOST}roles`;
	private createUrl: string = `${Helpers.API_HOST}role/create`;	
	private headers = { headers:  new Headers({'Content-Type': 'application/json'}) };
	constructor(private http: Http) {
	}
	
	getRoleList(): Observable<Role[]> { 
		return this.http.get(this.listUrl, Helpers.jwt())
			.map((res: Response) => {
				return res.json();
			}); 
	}

}