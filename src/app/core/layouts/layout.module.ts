import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from '../../features/default.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { LeftSideBarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HeaderNavComponent,
    LeftSideBarComponent,
    RightSidebarComponent,
    FooterComponent
  ],

  exports: [
    DefaultComponent,
    HeaderNavComponent,
    LeftSideBarComponent,
    RightSidebarComponent,
    FooterComponent
  ],

  imports: [
    CommonModule,
    RouterModule
  ]

})
export class LayoutModule { }
