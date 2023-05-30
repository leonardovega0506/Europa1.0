import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarEuropaComponent } from '../app/views/sidebar-europa/sidebar-europa.component';
import { DashboardGeneralComponent } from './views/dashboard-general/dashboard-general.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DashboardPedidosComponent } from './views/completos/dashboard-pedidos/dashboard-pedidos.component';
import { ListaPaqueteEstafetaComponent } from './views/estafeta/lista-paquete-estafeta/lista-paquete-estafeta.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarEuropaComponent,
    DashboardGeneralComponent,
    DashboardPedidosComponent,
    ListaPaqueteEstafetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
