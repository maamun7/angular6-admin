import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component'

const routes: Routes = [
  {
    "path": "",
    "component": CoreComponent,
    "canActivate": [],
    "children": [
      {
        "path": "index",
        "loadChildren": "..\/features\/dashboard\/dashboard.module#DashboardModule",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
