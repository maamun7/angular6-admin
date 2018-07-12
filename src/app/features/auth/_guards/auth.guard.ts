import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import { AuthService } from "../_services/auth.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private _router: Router, private _authService: AuthService) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

		//localStorage.removeItem('currentUser');
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		
		if (currentUser == null ) {		
			this._router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
			return false;
		}

		return this._authService.verify().map( (data) => {
				if (data !== null) {
					// logged in so return true
					return true;
				}
				// error when verify so redirect to login page with the return url
				localStorage.removeItem('currentUser');
				this._router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
				return false;
			},
			error => {
				// error when verify so redirect to login page with the return url
				this._router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
				return false;
			});
	}
}