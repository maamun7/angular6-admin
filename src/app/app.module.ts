import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { CoreRoutingModule } from './core/core-routing.module';
import { LayoutModule } from './core/layouts/layout.module';
import { CoreComponent } from './core/core.component';
import { AppComponent } from './app.component';
import { AuthModule } from './features/auth/auth.module';
import { APP_BASE_HREF } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CoreComponent,
    AppComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreRoutingModule,
    AuthModule,
    NgbModule.forRoot()
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
