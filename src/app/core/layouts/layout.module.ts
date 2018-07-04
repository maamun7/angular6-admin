import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderNavComponent,
    RightSidebarComponent
  ],

  exports: [
    LayoutComponent,
    HeaderNavComponent,
    RightSidebarComponent
  ],

  imports: [
    CommonModule,
    RouterModule
  ]

})
export class LayoutModule { }
