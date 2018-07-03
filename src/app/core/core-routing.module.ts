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
            "path": "",
            "loadChildren": ""
        }
      ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
