import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from './role.component';
import { LayoutModule } from '../../core/layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { RoleService } from './_services/role.service';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": RoleComponent
            },
            {
                "path": "create",
                "component": RoleComponent
            }
        ]
    }
];

@NgModule({    
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule
    ],

    exports: [
        RouterModule
    ],

    declarations: [
        RoleComponent
    ],

    providers: [
        RoleService
    ]
})

export class RoleModule  {

}