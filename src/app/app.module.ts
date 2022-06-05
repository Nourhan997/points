import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidenavModule } from 'angular-ng-sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './modules/layouts/common_layouts/sidenav/sidemenu/sidemenu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import {MatDividerModule} from '@angular/material/divider';
import { CustomersComponent } from './modules/customers/customers.component';

@NgModule({
  declarations: [AppComponent, SidemenuComponent, DashboardComponent, CustomersComponent],
  imports: [
    BrowserModule,
    SidenavModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
