import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import { AuthGuard } from '../features/auth/_guards/auth.guard';

const routes: Routes = [
  {
    "path": "",
    "component": CoreComponent,
    "canActivate": [AuthGuard],
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
