import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component'

const routes: Routes = [
  {
    "path": "",
    "component": CoreComponent,
   // "canActivate": [AuthGuard],
    "children": [
        {
            "path": "angular\/ng-bootstrap",
            "loadChildren": ".\/pages\/default\/angular\/ng-bootstrap\/ng-bootstrap.module#NgBootstrapModule"
        }
      ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
