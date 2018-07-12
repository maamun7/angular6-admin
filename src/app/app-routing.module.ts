import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './features/auth/logout/logout.component';

const routes: Routes = [
  {path: 'login', loadChildren: './features/auth/auth.module#AuthModule'},
  {path: 'logout', component: LogoutComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full', loadChildren: ''},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
