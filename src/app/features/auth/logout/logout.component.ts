import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../_services/auth.service";
import {Helpers} from "../../../utils/helpers";

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	encapsulation: ViewEncapsulation.None,
})

export class LogoutComponent implements OnInit {

	constructor(private _router: Router,
	            private _authService: AuthService) {
	}

	ngOnInit(): void {
		Helpers.setLoading(true);
		// reset login status
		this._authService.logout();
		this._router.navigate(['/login']);
	}
}