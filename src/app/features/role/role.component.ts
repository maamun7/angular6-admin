import {Component, ComponentFactoryResolver, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import { Observable } from "rxjs";
import { AlertService } from '../../core/services/alert.service';
import { RoleService } from './_services/role.service';
import { Role } from "./_models/role.model";

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./role.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [AlertService]
})

export class RoleComponent implements OnInit, AfterViewInit {
    model: any = {};
	loading = false;
    returnUrl: string;
    private roleList: Role[] = [];

    constructor(
        private _alertService: AlertService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _roleService: RoleService
    )  {
       
    }

    async ngOnInit()  {
        // get return url from route parameters or default to '/'
		this.returnUrl = await this._route.snapshot.queryParams['returnUrl'] || '/';
    //    this._router.navigate([this.returnUrl]);
        
        this._roleService.getRoleList()
        .subscribe((roles) => {
            console.log('Roles :', roles);
            this.roleList = roles;
        });
    }

    ngAfterViewInit()  {
       
    }
}