import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {BaseRequestOptions, HttpModule} from "@angular/http";

import {AuthRoutingModule} from "./auth-routing.routing";
import {AuthComponent} from "./auth.component";
import {LogoutComponent} from "./logout/logout.component";
import {AuthGuard} from "./_guards/auth.guard";
import {AuthService} from "./_services/auth.service";
import {UserService} from "./_services/user.service";
import { AlertComponent } from "../../shared/components/alert/alert.component";

@NgModule({
	declarations: [
		AuthComponent,
		LogoutComponent,
		AlertComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		HttpModule,
		AuthRoutingModule,
	],

	exports: [
		AuthComponent,
		LogoutComponent,
	],

	providers: [
		AuthGuard,
		AuthService,
		UserService,
		BaseRequestOptions,
	],
	entryComponents: [AlertComponent]
})

export class AuthModule {

}